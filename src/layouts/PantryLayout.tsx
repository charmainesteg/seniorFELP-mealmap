import { Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../pages/Pantries.css";

export default function PantryLayout() {
    return (
        <main>
            <div className="hero-pantry-div">
                <section className="hero-pantry-header">
                    <h1 className="pantry-header-text">Find Local Pantries Here</h1>
                    <div className="pantry-header-btn-div">
                        <Button className="pantry-header-btn">
                            Locate a pantry near you
                        </Button>
                    </div>
                </section>
            </div>
            <Outlet />
        </main>
    )
}