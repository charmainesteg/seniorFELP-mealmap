import "../pages/Resources.css";

const ResourceBanner = () => {
  return (
    <div className="resource-banner">
      <h3 className="banner-header">
        To find more information click the icons:
      </h3>
      <div className="row">
        <div className="resource-items snap col-sm">
          <a
            href="https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-utensils"></i>
          </a>
          <h4>SNAP</h4>
        </div>
        <div className="resource-items tefap col-sm">
          <a
            href="https://dfcs.georgia.gov/services/food-commodity-programs/emergency-food-assistance-program"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-bread-slice"></i>
          </a>
          <h4>TEFAP</h4>
        </div>
        <div className="resource-items csfp col-sm">
          <a
            href="https://dfcs.georgia.gov/services/food-commodity-programs/commodity-supplemental-food-program"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-seedling"></i>
          </a>
          <h4>CSFP</h4>
        </div>
      </div>
    </div>
  );
};

export default ResourceBanner;
