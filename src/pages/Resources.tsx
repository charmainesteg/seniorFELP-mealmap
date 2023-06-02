import ResourceCard from "../components/cards/ResourceCard";
import resourceData from "../assets/data/resourceData";
import AddResourceCard from "../components/cards/AddResourceCard";
import ResourceBanner from "../components/ResourceBanner";
import addresourceimg from "../assets/images/addresourceimg.jpeg";
import "./Resources.css";

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
    <ResourceBanner/>
      <div className="additional-resources row">
        <div className="add-resource-item col-sm">
          <AddResourceCard />
        </div>
        <div className="add-resource-item col-sm">
          <img src={addresourceimg} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Resources;
