
import './App.css';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import RootLayout from './pages/RootLayout';
import PantryCard from './pages/PantryCard';
import WelcomePage from './pages/WelcomePage';
import AboutPage from './pages/AboutPage';
import PantryDetail from './pages/PantryDetail';
import PantryLayout from './pages/PantryLayout';
import pantryDatadata from './assets/data/data';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route
      path='/'
      element={<RootLayout />}>
      <Route
        index
        element={<WelcomePage title="Welcome page" />} />
      <Route
        path='/pantry'
        element={<PantryLayout />}>
        <Route
          index
          element={<PantryCard data={pantryDatadata} />}
        />
        <Route
          path=':pantryID'
          element={<PantryDetail />}
        />
      </Route>
      <Route
        path='/about'
        element={<AboutPage title="About Page" />}
      />
    </Route >

  )
);
function App() {

  return <RouterProvider router={router} />;
}
export default App;
