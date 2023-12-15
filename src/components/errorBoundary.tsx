import { useRouteError } from "react-router-dom";

type ErrorResponse = {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: Error;
};

function ErrorBoundary() {
  const error = useRouteError() as ErrorResponse;

  switch (error.statusText) {
    case "Not Found":
      return <div>404</div>;

    default:
      return <>{error}</>;
  }
}

export default ErrorBoundary;
