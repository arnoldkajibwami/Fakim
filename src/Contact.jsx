import React from "react";
import "./contact.css"
import Contactdettails from "./Contactdetails";
import LoaderPage from "./Loader";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
        <LoaderPage/>
            <div style={{ height: "40vh"}} className="text-center contactbg contactusbg bg-light mb-4">
                    <h1 id="blogcontact">Contacter Nous</h1>
                    <div className="d-flex justify-content-center " id="blogcontacts"> 
                        <h6 style={{color:"#dedcdc"}}><Link to='/' id="Accueilstyle" style={{color:"white"}}>Accueil</Link></h6>
                        <h6 style={{marginLeft:"10px", marginRight:"10px"}}> / </h6>
                        <h6>Contacter Nous</h6>
                    </div>
            </div>

            <section style={{marginTop:"80px"}}>
                <Contactdettails/>
            </section>
        </>
    )
}