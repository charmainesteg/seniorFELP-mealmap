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
      <div className="intro-paragraph">
        <h2>Empowering Lives, One Resource at a Time: Beyond Food Pantries.</h2>
        <p>Welcome to our food pantry locator website, where we are committed to helping individuals and families access essential food resources. We understand that food pantries play a crucial role in providing immediate assistance, but we also recognize that there are many other challenges individuals may face beyond hunger. That's why we've compiled a comprehensive list of additional assistance programs available to support you and your loved ones during difficult times. Alongside the resources already displayed, these additional programs aim to address various aspects of life to help you achieve stability and a brighter future. Explore these programs and see how they can make a positive impact on your journey towards well-being and self-sufficiency.</p>
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
          <img src={addresourceimg} className="add-resource-img" alt="woman eating with her family"></img>
        </div>
      </div>
    </div>
  );
};

export default Resources;
