/**
 * Guards the one content bug this design keeps inviting: `.lc` lowercases
 * visually, but textContent keeps the authored case. So any element rendered
 * lowercase whose real text holds an acronym or a mid-sentence proper noun is
 * being mangled on screen.
 *
 *   node scripts/check-casing.mjs [url]
 */
import { chromium } from "playwright";

const base = (process.argv[2] ?? "http://localhost:5173").replace(/\/$/, "");
const routes = [
  "/", "/about", "/work", "/work/social-video",
  "/results", "/profile", "/contact",
];
const ACRONYM = /\b[A-Z]{2,}\b/;
const MID_SENTENCE_PROPER = /[a-z,]\s+(?!I\b)[A-Z][a-z]+/;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage();

const offenders = [];
for (const route of routes) {
  await page.goto(base + route, { waitUntil: "networkidle" });
  const found = await page.evaluate(() => {
  const out = [];
  for (const el of document.querySelectorAll("*")) {
    if (getComputedStyle(el).textTransform !== "lowercase") continue;
    // only leaf-ish nodes, so a lowercase parent is not reported per child
    if (el.querySelector("*[class]")) continue;
    out.push({ text: el.textContent.trim().replace(/\s+/g, " "), tag: el.tagName });
  }
  return out;
  });
  offenders.push(...found.map((f) => ({ ...f, route })));
}
await browser.close();

const bad = offenders.filter(
  (o) => ACRONYM.test(o.text) || MID_SENTENCE_PROPER.test(o.text),
);

if (bad.length) {
  console.error(`FAIL: ${bad.length} lowercased string(s) contain proper nouns:\n`);
  for (const b of bad) console.error(`  ${b.route}  <${b.tag}> ${b.text.slice(0, 80)}`);
  console.error("\nRemove `lc` from these, or the casing will read wrong on screen.");
  process.exit(1);
}

console.log(`OK: ${offenders.length} lowercased string(s) across ${routes.length} routes, none mangled.`);
