import './About.css';
import React, { useEffect, useRef } from 'react';
const About = () => {

    const column1Ref = useRef(null);
    const column2Ref = useRef(null);
    useEffect(() => {
        const column1Node = column1Ref.current;
        const column2Node = column2Ref.current;
        const appearOptions = {
            threshold: 0.5, // Customize the threshold as per your requirement
        };

        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        if (column1Node) {
            appearOnScroll.observe(column1Node);
        }

        if (column2Node) {
            appearOnScroll.observe(column2Node);
        }
        return () => {
            if (column1Node) {
                appearOnScroll.unobserve(column1Node);
            }

            if (column2Node) {
                appearOnScroll.unobserve(column2Node);
            }
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="row gx-20">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget euismod neque, gravida consectetur augue. Vestibulum nunc nunc, tempor eget dapibus in, egestas vitae elit. Sed tincidunt massa ligula. Mauris rutrum in ante ut placerat. Donec auctor, mi in ullamcorper egestas, velit sem ullamcorper nunc, id tempor ipsum dolor id urna. Ut sollicitudin elit
                        sit amet ligula placerat gravida. Duis ornare orci arcu, ut cursus nibh dictum faucibus.</p>
                    <p>In sed orci arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam id luctus lorem. Praesent nisl risus, faucibus eu suscipit in, ornare nec enim. Curabitur vitae suscipit enim, nec condimentum magna. Fusce nec ligula risus. Donec sagittis at lorem
                        sed hendrerit. In tristique volutpat nibh, in porta tortor ultricies at.</p>
                </div>
            </div>
            <div className='container-wrapper red'>
                <div className="container">
                    <div className="row gx-20">
                        <div className="col-sm">
                            <div className="about-box" ref={column1Ref}>
                                <h2>Mission</h2>
                                <p>To leverage the power of
                                    community to achieve lasting solutions to hunger and its root causes</p>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div className='about-box' ref={column2Ref}>
                                <h2>Vision</h2>
                                <p>Communities where
                                    everyone has access to the food and resources they need to thrive</p>
                            </div>
                        </div>
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
        </>);
};

export default About;
