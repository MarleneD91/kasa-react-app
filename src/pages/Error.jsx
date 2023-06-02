import React from 'react'

//HEADER & FOOTER - COMPONENTS
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//STYLESHEET
import '../sass/pages/error.scss'

const Error = () => {
    return(
    <>
        <Header/>
        <div className="main-error">
            <span className="error-number">404</span>
            <p >Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
        <Footer/>
    </>
    )
}

export default Error;