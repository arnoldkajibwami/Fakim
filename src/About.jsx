import React from "react";
import "./about.css"
import AboutDetails from "./AboutDetails";
import AboutTeam from "./AboutTeam";
import Breadcrumb from "./Breadcrumb";
import BgImage1 from './images/3.jpg'
import LoaderPage from "./Loader";


export default function About() {
    return (
        <>
            <LoaderPage/>
            <Breadcrumb page={"Apropos De"} image={BgImage1}/>
            <AboutDetails />
            <AboutTeam/>
        </>
    );
}