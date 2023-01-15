import React  from "react";
import {createRoot} from "react-dom/client";
import Banner from "./components/Banner";
import AppHeader from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";
import { AppRouters } from "./Routers/AppRouters";

const AppContainer = () => {
  return (<>
    <div className={'app-container'}>
      <AppHeader />
      <Banner />
      <Outlet />
    </div>
    <Footer />
  </>)
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: AppRouters,
  }
]);

const app = document.getElementById("root");
const root = createRoot(app);
root.render(<RouterProvider router={AppRouter} />);