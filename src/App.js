import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError
} from "react-router-dom";
import React, { Suspense } from "react";
import NavRoutes from "../src/routes/NavRoutes";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "*",
        element: (
          <Suspense>
            <NavRoutes />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

function ErrorBoundary() {
  const error = useRouteError();
  if (error) {
    return <div>Error in page </div>;
  }
}

export default App;
