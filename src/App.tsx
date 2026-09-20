import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Folder from "./components/Folder";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

/* Six chapters. Work holds an index; each case study is its own address. */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Folder />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "work", element: <Work /> },
      { path: "work/:slug", element: <CaseStudy /> },
      { path: "results", element: <Results /> },
      { path: "profile", element: <Profile /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <span aria-hidden className="grain" />
      <span aria-hidden className="table-surface" />
      <RouterProvider router={router} />
    </>
  );
}
