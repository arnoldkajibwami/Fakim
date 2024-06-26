import {React} from 'react';
import { useEffect } from 'react';
import './ServicesSection.css'; // Import your CSS file
import Image1 from './LOGO/car.png'
import Image2 from './LOGO/distribution.png'
import Image3 from './images/1.png'
import Image4 from './LOGO/douane.png'
import Image5 from './LOGO/network.png'
import Image6 from './LOGO/warehouse.png'

import AOS from 'aos'
import 'aos/dist/aos.css'


const ServicesSection = () => {

    useEffect(() => {
        AOS.init({ duration: 1000000 })
    }, [])

    const services = [
        {
            icon: Image1,
            title: 'Automobile',
            description:
                'Transport, Ventes des vehicules et des engins motorises,la locations de engins, fournitures des pieces des rechanges,...',
        },
        {
            icon: Image2,
            title: 'Logistique Général',
            description:
                "Prise en charge complète de votre chaîne logistique, du transport à l'entreposage et à la distribution. (Import -Export)",
        },
        {
            icon: Image3,
            title: 'Construction',
            description:
                "Conception et construction d'ouvrages en général, sous-traitance dans le domaine de la construction, fourniture et vente de matériaux de construction.",
        },
        {
            icon: Image4,
            title: 'Commission en Douane',
            description:
                "Assistance dans toutes vos démarches douanières, de l'importation à l'exportation.",
        },
        {
            icon: Image5,
            title: 'Réseau Informatique',
            description:
                "Specialiser dans l'installation et la maintenance de réseaux locaux (LAN), La téléphonie sur IP (VoIP) et la consultation informatique.",
        },
        {
            icon: Image6,
            title: 'Manutention ',
            description:
                'Sous-traitance dans les domaines de manutentionnaire',
        },
        // Add more service objects here...
    ];

    return (
        <section className="section services-section container">
            <div className="row">
                <div className="servicestyle" data-aos="fade-up">
                    <h4 className='text-center mt-4 mb-4' style={{fontWeight:"600", fontSize:"20px"}}>
                        Nos Services
                    </h4>
                </div>
                {services.map((service) => (
                    <div className="column" key={service.title}>
                        <div className="card">
                            <div className="icon-wrapper">
                                <img className='iconImage' src={service.icon} />
                            </div>
                            <h5 className='h5'>{service.title}</h5>
                            <p className='p'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
