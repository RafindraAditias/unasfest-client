import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./config/routesConfig.tsx";

const router = createBrowserRouter(routesConfig);

export default function App() {
  return (
    <main className="font-roboto">
      <RouterProvider router={router} />
    </main>
  );
}
