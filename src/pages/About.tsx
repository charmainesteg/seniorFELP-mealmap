import "./About.css";
import React, {useEffect, useRef} from 'react';

const About = () => {

    const column1ref= useRef(null);
    const column2ref= useRef(null);

    useEffect(() => {
        const column1Node = column1ref.current;
        const column2Node = column2ref.current;
        const appearOptions = {
            threshold: 0.5,
        };
        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if(!entry.isIntersecting){
                    return;
                } else {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);
        if (column1Node){
            appearOnScroll.observe(column1Node);
        }
        if (column2Node){
            appearOnScroll.observe(column2Node);
        }
        return () => {
            if (column1Node){
                appearOnScroll.unobserve(column1Node);
            }
            if (column1Node){
                appearOnScroll.unobserve(column1Node);
            }
        };
    }, []);

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
          Despite being a fundamental necessity for human survival, countless
          individuals within our community face the daily challenge of securing
          an adequate amount of food to sustain themselves.
        </h3>
        <p>
          Meal Map is an innovative and user-friendly website that serves as a
          comprehensive resource for individuals combatting hunger and food
          insecurity. With an intuitive interface and extensive database, Meal
          Map empowers users to easily locate pantries, shelters, hunger relief
          organizations, and government assistance programs in their local
          neighborhoods.
        </p>

        <p>
          By entering their location or enabling location services, users can
          quickly find nearby food pantries, complete with detailed information
          on addresses, contact details, and operating hours. This invaluable
          tool reduces the burden of food insecurity, ensuring convenient access
          to essential groceries and nourishment. Meal Map goes beyond pantries
          and also provides a comprehensive directory of shelters, assisting
          those experiencing homelessness or seeking temporary accommodation by
          offering information on nearby shelters, amenities, and eligibility
          requirements. Additionally, Meal Map serves as a hub for information
          on hunger relief organizations and government assistance programs,
          empowering users to contribute to initiatives or seek support from
          reputable institutions. With its user-friendly design and inclusivity,
          Meal Map connects individuals with the necessary resources, fostering
          community engagement in the fight against hunger.
        </p>
      </div>
      <div className="container-wrapper blue">
        <div className="row gx-20">
          <div className="about-box-container col-sm">
            <div className="about-box" ref={column1ref}>
              <h3>Mission</h3>
              <p>
                To provide individuals with the tools and resources they need to
                combat hunger and food insecurity, fostering community
                well-being and empowering users to access essential food
                resources in their local neighborhoods.
              </p>
            </div>
          </div>
          <div className=" about-box-container col-sm">
            <div className="about-box" ref={column2ref}>
              <h3>Vision</h3>
              <p>
                Create a world where every individual has access to reliable and
                nutritious food, eliminating hunger and promoting equitable
                communities.
              </p>
            </div>
          </div>
        </div>
        <div className='container-wrapper no-margin red'>
                <div className="container">
                    <div className="row gx-20">
                        <p>In sed orci arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam id luctus lorem. Praesent nisl risus, faucibus eu suscipit in, ornare nec enim. Curabitur vitae suscipit enim, nec condimentum magna. Fusce nec ligula risus. Donec sagittis at lorem
                            sed hendrerit. In tristique volutpat nibh, in porta tortor ultricies at.</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default About;
