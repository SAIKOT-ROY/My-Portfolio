import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-base-200 min-h-screen">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
