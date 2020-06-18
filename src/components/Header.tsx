import React, {Fragment} from 'react';
import './Header.css'
import {FaArrowDown, FaLinkedinIn, FaMailBulk} from "react-icons/fa"


const Header = () => {
    return (
        <Fragment>
            <div className='container-fluid Banner'>
                <p className='Name'> Asaréel DADIOUARI </p>
                <div className='NavBar'>
                    <p className='NavBarElement'>Home</p>
                    <p className='NavBarElement'>Projects</p>
                    <p className='NavBarElement'>About</p>
                </div>
            </div>
            <div className='Header-Content'>
                <div className='display-3 text-center Header-Statement'>3rd Year Computer Science student at
                    <a className='Polytech-link' target='_blank' rel="noopener noreferrer"
                       href='http://unice.fr/polytechnice/fr#.XuuiLRNxeHs'>
                        <img className='Polytech-logo'
                             src='https://pbs.twimg.com/profile_images/1150709245161234434/BH2GzCSH_400x400.png'
                             alt='Logo'/>
                    </a>
                </div>
                <div className="container row">
                    <a title='Linkedin' target='_blank' rel="noopener noreferrer"
                       href='https://www.linkedin.com/in/yiemboiro-asar%C3%A9el-dadiouari-9ab235174/'> <FaLinkedinIn
                        className='linkedin-logo' fontSize="100px"/> </a>
                </div>
                <div className="container row">
                    <a title='Email' href='mailto:asareel.y.dadiouari@gmail.com'> <FaMailBulk className='email-logo'
                                                                                              fontSize="100px"/> </a>
                </div>
                <FaArrowDown className='arrow-down' fontSize="50px"/>
            </div>
        </Fragment>
    );
};

export default Header;
