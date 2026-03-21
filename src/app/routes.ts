import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { SectionsPage } from "./pages/SectionsPage";
import { AboutPage } from "./pages/AboutPage";
import { ExperiencesPage } from "./pages/ExperiencesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/sections",
    Component: SectionsPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/experiences",
    Component: ExperiencesPage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);