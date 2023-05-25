import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Pantries from "./pages/Pantries";
import Resources from "./pages/Resources";
import About from "./pages/About";
import PantryDetail from "./pages/PantryDetail";
import RootLayout from "./layouts/RootLayout";
import PantryLayout from "./layouts/PantryLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="pantries" element={<PantryLayout />}>
        <Route
          index
          element={<Pantries />}
        />
        <Route
          path=":pantryId"
          element={<PantryDetail />}
        />
      </Route>
      <Route path="resources" element={<Resources />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
