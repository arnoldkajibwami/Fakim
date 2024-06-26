import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './LOGO/white.jpg'
// import Logo from './LOGO/white2.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './about.css'

export default function AboutDetails() {
    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])

    const navigate = useNavigate()
    function GotoTeam() {
        window.scrollTo(0, 900)
        navigate("/about")
    }
    return (
        <>
            <div className="about_section layout_padding toblock" >
                <div className="container" data-aos="fade-up">
                    <h1 className="about_taital" >APROPOS DE FAKIM GROUP s.a.r.l </h1>
                    <p className="about_text"></p>
                    {/* <p className="about_text">La Solution en République Démocratique du Congo </p> */}
                    <div className="about_section_2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_image">
                                    <img data-aos="zoom-in" src={Logo} alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-6 tomarginText" >
                                <div className="about_taital_main">
                                    <p className="lorem_text "><span style={{ fontWeight: "bold" }}> FAKIM GROUP s.a.r.l    </span>
                                        est une entreprise multiservices créée en 2024 et basée à Kinshasa, en République Démocratique du Congo.
                                        Nous sommes fiers d'offrir une gamme complète de services de qualité à nos clients, dans divers secteurs d'activité
                                    </p>
                                    <span onClick={GotoTeam} className='detailboxa mb-5' style={{ textDecoration: "none" }} data-aos="fade-up">
                                        Notre Equipe Technique
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_section layout_padding tonone" >
                <div className="container" data-aos="fade-up">
                    <h1 className="about_taital" >APROPOS DE FAKIM GROUP s.a.r.l </h1>
                    <p className="about_text"></p>
                    {/* <p className="about_text">La Solution en République Démocratique du Congo </p> */}
                    <div className="about_section_2">
                        <div className="row">
                
                            <div className="col-lg-6 tomarginText" >
                                <div className="about_taital_main">
                                    <p className="lorem_text "><span style={{ fontWeight: "bold" }}> FAKIM GROUP s.a.r.l    </span>
                                        est une entreprise multiservices créée en 2024 et basée à Kinshasa, en République Démocratique du Congo.
                                        Nous sommes fiers d'offrir une gamme complète de services de qualité à nos clients, dans divers secteurs d'activité
                                    </p>
                                    <span onClick={GotoTeam} className='detailboxa mb-5' style={{ textDecoration: "none" }} data-aos="fade-up">
                                        Notre Equipe Technique
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about_image">
                                    <img data-aos="zoom-in" src={Logo} alt="about" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}