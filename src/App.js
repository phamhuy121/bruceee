import "./App.scss";
import LayoutRoot from "./components/Layout";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <LayoutRoot>
        <Router />
      </LayoutRoot>
    </BrowserRouter>
  );
}

export default App;
