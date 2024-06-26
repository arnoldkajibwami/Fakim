// import React, { useEffect } from "react";
// import "./Service.css"
// import Image2 from "./LOGO/distribution.png"
// import Image3 from "./images/1.png"
// import Image4 from "./LOGO/assainissement.png"
// import Image6 from "./LOGO/douane.png"
// import Image7 from "./LOGO/network.png"

// import AOS from 'aos'
// import 'aos/dist/aos.css'

// export default function ServiceContainer() {

//     useEffect(() => {
//         AOS.init({ duration: 1000000 })
//     }, [])

//     return (
//         <>
//             <section className="mt-5 service_section">
//                 <div className="container">
//                     <div className="heading_container d-flex" data-aos="fade-up">
//                         <h3>
//                             Nos Services
//                         </h3>
//                     </div>

//                     <div className="service_container">
//                         <div className="box" data-aos="fade-up">
//                             <div className="img-box" >
//                                 <img data-aos="zoom-in" src={Image2} className="img1" alt="" />
//                             </div>
//                             <div className="detail-box">
//                                 <h5>
//                                     Logistique
//                                 </h5>
//                                 <p>
//                                     Prise en charge complète de votre chaîne logistique, du transport à l'entreposage et à la distribution.
//                                     Solutions de transport adaptées à vos besoins et à votre budget, par voie terrestre, maritime ou aérienne.
//                                     Suivi en temps réel de vos marchandises pour une transparence totale.
//                                     Gestion des stocks et préparation de commandes pour une livraison rapide et efficace
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="box activeservice" data-aos="fade-up">
//                             <div className="img-box" >
//                                 <img data-aos="zoom-in" src={Image3} className="img1" alt="" />
//                             </div>
//                             <div className="detail-box">
//                                 <h5>
//                                     Construction
//                                 </h5>
//                                 <p>
//                                     Réalisation de tous types de projets de construction, du bâtiment résidentiel au chantier commercial.
//                                     Expertise en construction neuve, rénovation et extension.
//                                     Maîtrise des différentes techniques de construction, traditionnelles et modernes.
//                                     Utilisation de matériaux de qualité et respect des normes en vigueur.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="box" data-aos="fade-up">
//                             <div className="img-box" >
//                                 <img data-aos="zoom-in" src={Image7} className="img1" alt="" />
//                             </div>
//                             <div className="detail-box">
//                                 <h5>
//                                     Réseau Informatique
//                                 </h5>
//                                 <p>
//                                     Specialiser dans l'installation de réseaux locaux (LAN), de systèmes téléphoniques IP (VoIP), de caméras de surveillance et la consultation informatique. <br />
//                                     {/* Nous pouvons vous aider à concevoir, installer et configurer un réseau qui répond à vos besoins spécifiques, en tenant compte de votre budget et de vos contraintes spatiales. */}
//                                     Notre équipe d'experts est qualifiée pour vous conseiller sur la meilleure solution pour vos besoins et pour vous fournir une assistance technique de qualité.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="box" data-aos="fade-up">
//                             <div className="img-box" >
//                                 <img data-aos="zoom-in" src={Image4} className="img1" alt="" />
//                             </div>
//                             <div className="detail-box">
//                                 <h5>
//                                     Assainissement
//                                 </h5>
//                                 <p>
//                                     Nous concevons et installons des systèmes d'acheminement d'eau adaptés à vos besoins spécifiques, qu'il s'agisse d'une alimentation en eau potable, d'une irrigation agricole ou d'un système d'extinction d'incendie.
//                                     Notre équipe d'experts évalue vos besoins et contraintes, puis sélectionne les matériaux et les équipements appropriés pour garantir une performance optimale et une durabilité à long terme.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="box" data-aos="fade-up">
//                             <div className="img-box" >
//                                 <img data-aos="zoom-in" src={Image6} className="img1" alt="" />
//                             </div>
//                             <div className="detail-box">
//                                 <h5>
//                                     Douane
//                                 </h5>
//                                 <p>
//                                     Assistance dans toutes vos démarches douanières, de l'importation à l'exportation.
//                                     Déclaration de vos marchandises en douane et obtention des autorisations nécessaires.
//                                     Optimisation de vos procédures douanières pour gagner du temps et de l'argent.
//                                     Conseil et expertise en matière de réglementation douanière.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>
//     );
// }