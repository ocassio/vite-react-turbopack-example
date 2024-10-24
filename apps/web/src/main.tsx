import { Header, Counter, useCounter } from "@repo/ui";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { FC, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Test from "./components/test.component";
import { DATE_FORMAT } from "@repo/widgets/const/format.const";
import ToggleButtons from "@repo/widgets/components/toggle-buttons.component";

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
      <Header title={DATE_FORMAT} />
      <div className="card">
        <Counter value={value} onClick={increase} />
      </div>
      <Test />
      <ToggleButtons />
    </div>
  );
};

const root = createRoot(document.getElementById("app")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
