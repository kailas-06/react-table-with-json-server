import React from "react";
import "./App.css";
import PostDataComponent from "./components/PostDataComponent";
import BasicTable from "./components/BasicTable";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DataUpdate from "./components/DataUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicTable />,
  },
  {
    path: "/post-data-component",
    element: <PostDataComponent />,
  },
  {
    path: "/data-update/:id",
    element: <DataUpdate />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
