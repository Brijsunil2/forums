import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen.jsx";

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
}

export default App;
