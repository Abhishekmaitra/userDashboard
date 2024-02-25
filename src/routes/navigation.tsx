import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NotAllowed from "../pages/NotAllowed";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

interface Navigation {
  name: string;
  path: string;
  element: React.ReactNode;
  protected?: boolean;
}

export const navigations: Navigation[] = [
  {
    name: "error404",
    path: "*",
    element: <NotFound />,
  },
  {
    name: "not allowed",
    path: "/not-allowed",
    element: <NotAllowed />,
  },
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
];
