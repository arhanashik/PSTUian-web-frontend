import ReactDOM from "react-dom/client";

import "./styles/config.style.css";
import "./styles/main.style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/main.router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
