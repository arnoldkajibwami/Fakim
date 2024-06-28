import {React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"

import "./footer.css"

export default function Footer() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const updateYear = () => {
            setCurrentYear(new Date().getFullYear());
        };

        const intervalId = setInterval(updateYear, 1000); // Update every second

        return () => clearInterval(intervalId); // Clean up on component unmount
    }, []);
    return (
        <>
            <section id="footer" className="mt-5 footer">

                <div className="footer-content position-relative">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <div className="footer-links">
                                        <ul>
                                            <li style={{ fontSize: "large", fontWeight: "bold" }} ><span className="nav-links footernavlink " style={{fontWeight:"900"}}>FAKIM GROUP s.a.r.l</span></li>
                                        </ul>
                                    </div>
                                    <p>

                                    </p>
                                    <div className="social-links d-flex mt-3">
                                        <Link to="https://web.facebook.com/profile.php?id=61561363147700" className="d-flex align-items-center justify-content-center"><i className="iconfooter"><BiLogoFacebook /></i></Link>
                                        <Link to="http://www.instagram.com/fakimgroups.a.r.l" className="d-flex align-items-center justify-content-center"><i className="iconfooter"><BiLogoInstagram /></i></Link>
                                        <Link to="https://www.youtube.com/channel/UCVxHDBlFmRtgwa3fymeEdyg/videos" className="d-flex align-items-center justify-content-center"><i className="iconfooter"><BiLogoYoutube /></i></Link>
                                        {/* <Link to="/home" className="d-flex align-items-center justify-content-center"><i className="iconfooter"><BiLogoTwitter /></i></Link>
                                        <Link to="/home" className="d-flex align-items-center justify-content-center"><i className="iconfooter"><BiLogoLinkedin /></i></Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links footerdblock">
                                <ul>
                                    <li style={{ fontSize: "large", fontWeight: "bold" }} ><span className="nav-links footernavlink " style={{fontWeight:"900"}}>Qui somme Nous?</span></li>
                                </ul>
                                <ul>
                                    <li><Link to="/home" onClick={BackToTOP} className="nav-links footernavlink footernavlinks"> Accueil </Link></li>
                                    <li><Link to="/contact" onClick={BackToTOP} className="nav-links footernavlink footernavlinks"> Contact Nous </Link></li>                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links footerdblock ml-4 ">
                                <ul>
                                    <li style={{ fontSize: "large", fontWeight: "bold", fontStyle:"15px !important" }} ><span className="nav-links footernavlink " style={{fontWeight:"900"}}>Ce que nous Faisons?</span></li>
                                </ul>
                                <ul>
                                    <li><Link to="/about" onClick={BackToTOP} className="nav-links footernavlink footernavlinks "> Apropos de </Link></li>
                                    <li><Link to="/service" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Nos Services </Link></li>
                                    <li><Link to="/project" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Nos Projets </Link></li>
                                    <li><Link to="/gallery" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Gallery </Link></li>
                                </ul>
                            </div>
                            <div className="tononefooter d-flex justify-content-around">
                                <div className="col-lg-2 col-md-3 footer-links">
                                    <ul>
                                        <li style={{ fontSize: "large", fontWeight: "bold" }} ><span className="nav-links footernavlink " style={{fontWeight:"900"}}>Qui somme Nous?</span></li>
                                    </ul>
                                    <ul>
                                        <li><Link to="/home" onClick={BackToTOP} className="nav-links footernavlink footernavlinks"> Accueil </Link></li>
                                        <li><Link to="/contact" onClick={BackToTOP} className="nav-links footernavlink footernavlinks"> Contacter Nous</Link></li>                                </ul>
                                </div>
                                <div className="col-lg-2 col-md-3 footer-links">
                                    <ul>
                                        <li style={{ fontSize: "large", fontWeight: "bold" }} ><span className="nav-links footernavlink" style={{fontWeight:"900"}}>Ce que nous Faisons?</span></li>
                                    </ul>
                                    <ul>
                                        <li><Link to="/about" onClick={BackToTOP} className="nav-links footernavlink footernavlinks "> Apropos de </Link></li>
                                        <li><Link to="/service" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Nos Services </Link></li>
                                        <li><Link to="/project" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Nos Projets </Link></li>
                                        <li><Link to="/gallery" onClick={BackToTOP} className="nav-links footernavlink footernavlinks">Gallery </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright {currentYear}. All Rights Reserved
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}



