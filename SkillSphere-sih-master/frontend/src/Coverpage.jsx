import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './utils/Header';
import homePic from "./assets/homepic.png";
import appLink from "./assets/AppLink.png";
import logo from "./assets/logo.png";
import { Link } from 'react-router-dom';

function Coverpage() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/home');
    };

    return (
        <div style={{
            background: "linear-gradient(90deg, #FF6E7F 12.5%, rgba(191, 233, 255, 0.87) 100%)",
            height: "140vh",
        }}>
            {/* Header Section */}
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "20px",
                paddingRight: "20px",
                color: "white",
                height: "91px",
                background: "linear-gradient(90deg, #0E1010 7%, #677276 92%)",
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: "center",
                    gap: "20px",
                    fontFamily: "Montserrat",
                    fontSize: "48px",
                    fontWeight: "700",
                    lineHeight: "60px",
                    textAlign: "center",
                }}>
                    <img src={logo} style={{ width: "80px", height: "auto" }} />
                    Virtual Vocations
                </div>
                <div className="text-end">
                    <button type="button" className="btn btn-dark me-2" onClick={goToHomePage}>Login</button>
                    <button type="button" className="btn btn-dark" onClick={goToHomePage}>Sign-up</button>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="start-grid">
                <div className="item-grid item1">
                    <img
                        src={homePic}
                        style={{
                            position: 'absolute',
                            top: "128px",
                            left: "578px",
                            width: "928.28px",
                            height: "887.66px",
                        }}
                    />
                </div>

                <div className="item-grid item2">
                    <div style={{
                        textAlign: "left",
                        marginLeft: "40px",
                        fontSize: "96px",
                        color: "black",
                        fontFamily: "Recursive",
                        fontWeight: "700"
                    }}>
                        Welcome to
                    </div>
                    <div style={{
                        marginLeft: "40px",
                        textAlign: "left",
                        width: "900px",
                        fontSize: "96px",
                        color: "black",
                        fontFamily: "Recursive",
                        fontWeight: "700"
                    }}>
                        Virtual Vocations
                    </div>
                </div>

                <div
                    className="item-grid item3"
                    style={{
                        color: "white",
                        textAlign: "left",
                        fontSize: "25px",
                        marginLeft: "-40px"
                    }}
                >
                    "An innovative platform offering immersive virtual labs for conducting hands-on science and
                    technology experiments, enabling learners to explore and understand complex concepts interactively."
                </div>

                <div className="item-grid item4">
                    <Link to="/home">
                        <button
                            className="btn btn-outline-primary"
                            style={{
                                fontSize: "40px",
                                backgroundColor: "black",
                                color: "white",
                                width: "267px",
                                borderRadius: "50px",
                                marginLeft: "-400px"
                            }}
                            onClick={goToHomePage}
                            role="button"
                        >
                            Get Started
                        </button>
                    </Link>
                </div>

                <div className="app-link-img">
                    <img
                        src={appLink}
                        style={{
                            width: "450px",
                            height: "auto",
                            marginLeft: "150px",
                            marginTop: "80px"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Coverpage;
