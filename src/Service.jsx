import React from "react";
import "./Service.css"
import BgImage from "./images/10.jpg"
// import ServiceContainer from "./ServiceContainer";
import ServicesSectionTwo from './ServiceContainerTwo'
import WhatsappPop from "./WhatsappPop";
import Breadcrumb from "./Breadcrumb";
import LoaderPage from "./Loader";

export default function Service() {
    return (
        <>
            <LoaderPage/>
            <Breadcrumb 
            page={"Nos Services"} image={BgImage}/>
            {/* <ServiceContainer/> */}
            <ServicesSectionTwo/>
            <WhatsappPop/>
        </>
    );
}
