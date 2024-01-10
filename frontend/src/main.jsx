import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { CoreProvider } from "./context/core-context.jsx";
import { VisibilityProvider } from "./context/element-visibility.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CoreProvider>
      <VisibilityProvider>
        <App />
      </VisibilityProvider>
    </CoreProvider>
  </Provider>
);
