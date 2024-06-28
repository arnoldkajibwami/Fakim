import { useState, React, useEffect } from "react";
import Image1 from "./images/7.jpg"
// import Image2 from "./images/9.jpg"
// import Image2 from "./fakimimage/c5.jpg"
// import Image3 from "./images/10.jpg"
import ReactTyped from "react-typed";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Contactdettails from "./Contactdetails";
import WhatsappPop from "./WhatsappPop";
import AboutDetails from "./AboutDetails";
import ServicesSectionTwo from './ServiceContainerTwo'
import { useNavigate, Link } from "react-router-dom";
import './button.css'
import LoaderPage from "./Loader";
import LogoSlider from "./LogoSlider"


export default function Home() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }

    function GotoService() {
        window.scrollTo(0, 0)
        navigate("/service")
    }
    function GotoContact() {
        window.scrollTo(0, 0)
        navigate("/contact")
    }

    const text1 = "Faciliter la vie de nos clients en leur offrant des solutions intégrées et sur mesure et Contribuer au développement économique et social de la République Démocratique du Congo."
    const text2 = "Nous nous engageons à fournir des services de la plus haute qualité à nos clients. "
    const text3 = "votre partenaire idéal pour tous vos besoins. N'hésitez pas à nous contacter pour en savoir plus sur nos services et sur comment nous pouvons vous aider à atteindre vos objectifs."


    const [index, setIndex] = useState(0)
    const images = [Image1, Image1, Image1]
    const Textbg = [text1, text2, text3]

    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 10 seconds

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <>
            <LoaderPage />
            <WhatsappPop />
            <section className=" slider_section" style={{ backgroundImage: `url(${images[index]})`, transition: "background-image 1.5s ease-in-out" }} >
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-md-6" >
                            <div className="detail_box">
                                <h1 className="">
                                    <span className="textShadowStyle">Bienvenue chez</span>{" "}<br />
                                    <h5>
                                        <ReactTyped className="textShadowStyle" strings={["FAKIM GROUP s.a.r.l"]} typeSpeed={70} loop />
                                    </h5>
                                </h1>
                                <p className="mt-4 textShadowStyle" >
                                    {Textbg[index]}
                                    {/* {t('keywords.Index')} */}
                                </p>
                                <div className="d-flex homeButton">
                                    <button className="buttonThree" onClick={GotoService}>Nos Services</button>
                                    <button className="buttonTwo" onClick={GotoContact} style={{ marginLeft: "10px" }}>Contact Nous</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section style={{ marginTop: "80px" }}>
                <LogoSlider />
            </section>

            <section style={{ marginTop: "80px" }}>
                <ServicesSectionTwo />
                <div className="text-center" style={{ marginTop: "10px", marginBottom: "80px" }}>
                    <Link to="/gallery">
                        <button onClick={BackToTOP} className="buttonOne">Voir Plus</button>
                    </Link>
                </div>
            </section>
            <section style={{ marginTop: "-50px" }}>
                <AboutDetails />
            </section>

            <section style={{ marginTop: "80px" }}>
                <Contactdettails />
            </section>
        </>
    )
}
