import { Outlet } from "react-router-dom";
import "../pages/Pantries.css";
import LocationModal from "../components/LocationModal";

export default function PantryLayout() {
  return (
    <main>
      <div className="hero-pantry-div">
        <section className="hero-pantry-header">
          <h1 className="pantry-header-text">Find Local Pantries Here</h1>
          <div className="pantry-header-btn-div">
            <LocationModal />
          </div>
        </section>
      </div>
      <Outlet />
    </main>
  );
}
