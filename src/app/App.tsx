import React from "react";
import AppRouter from "./router/AppRouter";
import "./styles/reset.css";
import "./styles/global.scss";

function App() {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}

export default App;
