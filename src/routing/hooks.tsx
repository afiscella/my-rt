
import { BrowserRouter } from "react-router-dom";

export function withRouter(
  WrappedComponent: React.ElementType
): () => JSX.Element {
  return function Hoc() {
    return (
      <BrowserRouter>
        <WrappedComponent />
      </BrowserRouter>
    );
  };
}



