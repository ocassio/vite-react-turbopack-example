import { ThemeProvider } from "@mui/material";
import { Counter, Header, TWO_THEME, useCounter } from "@repo/ui";
import ToggleButtons from "@repo/widgets/components/toggle-buttons.component";
import { FC, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Link } from "react-router-dom";
import { CustomLink } from "../../../packages/ui";
import "./style.css";
import typescriptLogo from "/typescript.svg";

const Page1: FC = () => {
  const [value, increase] = useCounter();
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={typescriptLogo}
          className="logo vanilla"
          alt="TypeScript logo"
        />
      </a>
      <Header title="Docs" />
      <div className="card">
        <Counter value={value} onClick={increase} />
      </div>
      <ToggleButtons />
      <CustomLink url="/test">Test</CustomLink>
    </div>
  );
};

const Page2: FC = () => {
  return (
    <div>
      <h1>Test</h1>
      <Link to="/">Back</Link>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Page2 />
  },
  {
    path: "/",
    element: <Page1 />
  }
]);

const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

const root = createRoot(document.getElementById("app")!);
root.render(
  <StrictMode>
    <ThemeProvider theme={TWO_THEME}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
