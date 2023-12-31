import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import store from "./store.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";

const ForumsScreen = lazy(() =>
  import("./screens/ForumsScreen/ForumsScreen.jsx")
);
const NotFoundScreen = lazy(() =>
  import("./screens/NotFoundScreen/NotFoundScreen.jsx")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<ForumsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
