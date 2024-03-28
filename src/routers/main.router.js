import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <p className="h-screen w-screen flex justify-center items-center text-2xl bg-gray-50">
        Welcome Abroad!
      </p>
    ),
  },
  {
    path: "*",
    element: (
      <p className="h-screen w-screen flex justify-center items-center text-2xl bg-gray-50">
        You are lost!
      </p>
    ),
  },
]);
