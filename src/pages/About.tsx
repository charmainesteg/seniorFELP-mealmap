import "./About.css";

const About = () => {
  return (
    <div className="aboutpage">
      <div className="hero-about-div">
        <section className="hero-about-header">
          <h1 className="about-header-text">About</h1>
        </section>
      </div>
      <div className="about-text">
        <h1>Our goal is to ensure everyone has access to food.</h1>
        <h3>
        Despite being a fundamental necessity for human survival, countless individuals within our community face the daily challenge of securing an adequate amount of food to sustain themselves.
        </h3>
        <p>
        Meal Map is an innovative and user-friendly website that serves as a comprehensive resource for individuals combatting hunger and food insecurity. With an intuitive interface and extensive database, Meal Map empowers users to easily locate pantries, shelters, hunger relief organizations, and government assistance programs in their local neighborhoods.
        </p>

        <p>
        By entering their location or enabling location services, users can quickly find nearby food pantries, complete with detailed information on addresses, contact details, and operating hours. This invaluable tool reduces the burden of food insecurity, ensuring convenient access to essential groceries and nourishment. Meal Map goes beyond pantries and also provides a comprehensive directory of shelters, assisting those experiencing homelessness or seeking temporary accommodation by offering information on nearby shelters, amenities, and eligibility requirements. Additionally, Meal Map serves as a hub for information on hunger relief organizations and government assistance programs, empowering users to contribute to initiatives or seek support from reputable institutions. With its user-friendly design and inclusivity, Meal Map connects individuals with the necessary resources, fostering community engagement in the fight against hunger.
        </p>
        
      </div>
      <div className="color-banner"></div>
      <div className="about-banner">
            <div className="row">
            <div className="about-box col-sm">
                <h3>Mission</h3>
                <p>To provide individuals with the tools and resources they need to combat hunger and food insecurity, fostering community well-being and empowering users to access essential food resources in their local neighborhoods.</p>
            </div>
            <div className="about-box col-sm">
                <h3>Vision</h3>
                <p>Create a world where every individual has access to reliable and nutritious food, eliminating hunger and promoting equitable communities.</p>
            </div>
</div>
        </div>
    </div>
  );
};

export default About;
