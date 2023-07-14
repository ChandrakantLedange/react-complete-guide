import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import LineDraw from "./components/LineDraw";
import LineDraw2 from "./components/LineDraw2";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("store:9", store);
root.render(
  <Provider store={store}>
    {/* <LineDraw /> */}
    {/* <LineDraw2 /> */}
    <App />
  </Provider>
);
