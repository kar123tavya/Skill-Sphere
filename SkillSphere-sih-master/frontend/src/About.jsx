import React from 'react';
import './styles/About.css';
import Header from './utils/Header';
import Footer from './utils/Footer';
const AboutUs = () => {
    return (
        <>
        <Header/>
        <div className="about-us-wrapper">
            <div className="about-us-container">
                <hr />
                <div className="about-us-header">
                    <h2>About Us <i className="info-icon">i</i></h2>
                </div>
                <hr />
                <p>
                    Welcome to Virtual Vocation, your ultimate destination for learning and
                    growth! At Virtual Vocation, we are passionate about empowering individuals
                    to thrive in their careers by offering top-notch vocational courses
                    tailored to the needs of various industries. Our platform provides a
                    comprehensive learning experience through online courses, virtual labs,
                    and certifications, all aligned with the National Education Policy
                    (NEP).
                </p>
            </div>

            <div className="about-us-container">
                <hr />
                <div className="about-us-header">
                    <h2>What is Virtual Vocation? <i className="fas fa-angle-down"></i></h2>
                </div>
                <hr />
                <p>
                    Virtual Vocation is a cutting-edge educational platform that offers a wide
                    range of vocational courses designed to equip you with the practical
                    skills required in today's competitive job market. From
                    industry-specific training to hands-on virtual labs, we provide an
                    immersive learning environment that bridges the gap between education
                    and employment. Our courses are crafted to meet the highest standards,
                    ensuring that you gain the knowledge and expertise needed to excel in
                    your chosen field.
                </p>
            </div>

            <div className="about-us-container">
                <hr />
                <div className="about-us-header">
                    <h2>Why Virtual Vocation? <i className="fas fa-angle-down"></i></h2>
                </div>
                <hr />
                <p>
                    Industry-Relevant Courses: Our curriculum is developed in collaboration with industry experts to ensure that
                    the skills you learn are directly applicable to real-world scenarios.
                    <br /><br />
                    Virtual Labs: Gain hands-on experience through our state-of-the-art virtual labs, where you can practice and
                    perfect your skills in a simulated environment.
                    <br /><br />
                    Online Certification: Earn recognized certifications that validate your skills and enhance your
                    employability.
                    <br /><br />
                    Aligned with NEP: Our courses are designed to align with the National Education Policy, focusing on
                    practical, skill-based education that prepares you for the future.
                    <br /><br />
                    Flexible Learning: Learn at your own pace with our flexible online courses, accessible anytime, anywhere.
                </p>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AboutUs;
