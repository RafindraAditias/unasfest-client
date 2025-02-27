import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "styles/index.css";
import { Toaster } from "./components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    <App />
    <Toaster />
  </>
  // </React.StrictMode>
);
