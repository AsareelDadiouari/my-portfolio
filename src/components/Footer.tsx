import React from 'react';
import './Footer.css'
import {FaLinkedinIn, FaMailBulk} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container-fluid Footer">
            <div className="container text-center intouch">
                <p className=' text-white intouchtext'>Stay in touch with me</p>
                <a title='Linkedin' target='_blank' rel="noopener noreferrer"
                   href='https://www.linkedin.com/in/asareel-y-dadiouari/'> <FaLinkedinIn
                    className='linkedin-logo' fontSize="35px"/> </a>
                <a title='Email' href='mailto:asareel.y.dadiouari@gmail.com'> <FaMailBulk className='email-logo'
                                                                                          fontSize="35px"/> </a>
            </div>

            <div className="container-fluid mx-auto Footer-navBar">
                <p className="Footer-navBar-element">Home</p>
                <p className="Footer-navBar-element">Contact</p>
                <p className="Footer-navBar-element">Projects</p>
                <p className="Footer-navBar-element">About</p>
            </div>
        </div>
    );
};

export default Footer;
