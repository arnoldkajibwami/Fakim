import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser'
import emailjs from "emailjs-com";

export default function Contactdettails() {

    const SERVICE_ID = "service_ac3z1yx";
    const TEMPLATE_ID = "template_8cmzbjc";
    const PUBLIC_KEY = "fu5He4N3ewO5mxKRE";

    const form = useRef();
    const sendEmail = async (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert("Message Envoyé")
            }, (error) => {
                console.log(error.text);
                alert("Ce Message n'a pas ete envoyé !. Verifiez votre connexion" )
            });
        e.target.reset()
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mr-auto">
                        <h3>Contacter Nous</h3>
                        <p className="mb-5">Souhaitez-vous en savoir plus sur nos services ? <br />
                            N'hésitez pas à nous contacter ! Nous sommes toujours heureux de vous aider.</p>

                        <ul className="list-unstyled pl-md-5 mb-5">
                            <li className="d-flex text-black mb-2">
                                <span className="mr-3">
                                    <span className="icon-phone"></span>
                                </span> <p><a href="+243811700014" style={{ color: "black" }}>+ (243) 811 700 014</a></p>
                            </li>
                            <li className="d-flex text-black">
                                <span className="mr-3">
                                    <span className="icon-envelope-o">
                                    </span></span> <p><a href="fakimgroup@gmail.com" style={{ color: "black" }} id="fakimmail">fakimgroup@gmail.com</a> </p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <form onSubmit={sendEmail} className="mb-5" method="post" id="contactForm" name="contactForm">
                            <div className="row">

                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" name="from_name" id="name" placeholder="Nom complet" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <input type="email" className="form-control mt-5" name="from_mail" id="email" placeholder="Address Email" required/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <textarea className="form-control mt-5" name="message" id="message" cols="30" placeholder="Message" rows="7" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mt-5 ">
                                    <input type="submit" value='Envoyé' className="btn btn-color w-100" />
                                    <span className="submitting"></span>
                                </div>
                            </div>
                            <div id="form-message-warning mt-4"></div>
                            <div id="form-message-success">
                                Message Envoyer !
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
