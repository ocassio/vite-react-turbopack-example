import { Header, Counter, useCounter, TWO_THEME } from "@repo/ui";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { FC, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ToggleButtons from "@repo/widgets/components/toggle-buttons.component";
import { ThemeProvider } from "@mui/material";

const App: FC = () => {
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
    </div>
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
