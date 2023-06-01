import ResourceCard from "../components/cards/ResourceCard";
import resourceData from "../assets/data/resourceData";
import "./Resources.css"

const Resources = () => {
    return (
        <div className="resource-page">
            <div className="hero-resources-div">
                <section className="hero-resources-header">
                    <h1 className="resources-header-text">Resources</h1>
                </section>
            </div>
            <div className="resource-cards">
            {resourceData.map((item) => (
                <ResourceCard
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.text}
                header={item.header}
                />
            ))}
            </div>
            <div className="resource-banner">
                <div className="resource-snap">
                <i className="fa-regular fa-plate-utensils"></i>
                <h4>SNAP</h4>
                </div>
                <div className="resource-tefap">
                <i className="fa-duotone fa-user-chef"></i>
                <h4>TEFAP</h4>
                </div>
                <div className="resource-csfp">
                <i className="fa-regular fa-salad"></i>
                <h4>CSFP</h4>
                </div>
            </div>
        </div>
    )
};

export default Resources;
