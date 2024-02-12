import "./App.css";
import Router from "./config/router";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistor } from "../src/store/index";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
