import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {BiLogoInstagram} from "react-icons/bi"
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"
import {BiLogoLinkedin} from "react-icons/bi"
import Person1 from './images/freddy.png'

export default function AboutTeam() {
    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])
    return (
        <>
            <section className="text-center mb-5">
                <div id="team" className="team">
                    <div className="container">

                        <div className="section-header text-center">
                            <h2>Notre Equipe</h2>
                            {/* <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p> */}
                        </div>

                        <div className="row gy-4 mt-2">

                            <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Person1} className="img-fluid" alt="" />
                                    {/* <div className="social">
                                        <Link to="#"><BiLogoInstagram/></Link>
                                        <Link to="#"><BiLogoFacebook/></Link>
                                        <Link to="#"><BiLogoTwitter/></Link>
                                        <Link to="#"><BiLogoLinkedin/></Link>
                                    </div> */}
                                </div>
                                <div className="member-info text-center">
                                    <h4>AKILIMALI FREDDY</h4>
                                    {/* <h6>Ir de Mines</h6> */}
                                    <span>Directeur Général</span>
                                </div>
                            </div>

                            {/* <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Person2} className="img-fluid" alt="" />
                                    <div className="social">
                                        <Link to="#"><BiLogoInstagram/></Link>
                                        <Link to="#"><BiLogoFacebook/></Link>
                                        <Link to="#"><BiLogoTwitter/></Link>
                                        <Link to="#"><BiLogoLinkedin/></Link>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>Arnold KAJIBWAMI</h4>
                                    <span> TECHNIQUE DIRECTOR</span>
                                   
                                </div>
                            </div>  */}

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}