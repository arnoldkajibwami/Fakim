import React from "react";
import "./project.css"
import BgImage from "./LOGO/logo2.jpg"
// import BgImage from "./LOGO/logo21.jpg"
import WhatsappPop from "./WhatsappPop";
import Breadcrumb from "./Breadcrumb";
import LoaderPage from "./Loader";

export default function Projets() {
    return (
        <>
            <LoaderPage/>
            <Breadcrumb 
            page={"Nos Projets"} image={BgImage}/>
            <h1 className="text-center">Cette Page est en cour de construction. <br/> Bientôt disponible</h1>
            <WhatsappPop/>
        </>
    );
}
