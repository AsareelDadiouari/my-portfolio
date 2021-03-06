import React, {Fragment} from 'react';
import './Header.css'
import {FaArrowDown, FaLinkedinIn, FaMailBulk} from "react-icons/fa"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <Fragment>
            <div className='container-fluid Banner'>
                <p className='Name'> Asaréel DADIOUARI </p>
                <div className='NavBar'>
                    <Link to='/'>
                        <p className='NavBarElement'>Home</p>
                    </Link>
                    <Link to='/Projects'>
                        <p className='NavBarElement'>Projects</p>
                    </Link>
                    <Link to='/About'>
                        <p className='NavBarElement'>About</p>
                    </Link>
                </div>
            </div>
            <div className='Header-Content'>
                <p className='display-3 text-center Header-Statement'> Computer Science student at
                    <a className='Polytech-link' target='_blank' rel="noopener noreferrer"
                       href='http://unice.fr/polytechnice/fr#.XuuiLRNxeHs'>
                        <img className='Polytech-logo'
                             src='https://pbs.twimg.com/profile_images/1150709245161234434/BH2GzCSH_400x400.png'
                             alt='Logo'/>
                    </a>
                </p>
                <div className="container row">
                    <a title='Linkedin' target='_blank' rel="noopener noreferrer"
                       href='https://www.linkedin.com/in/yiemboiro-asar%C3%A9el-dadiouari-9ab235174/'> <FaLinkedinIn
                        className='linkedin-logo' fontSize="35px"/> </a>
                </div>
                <div className="container row">
                    <a title='Email' href='mailto:asareel.y.dadiouari@gmail.com'> <FaMailBulk className='email-logo'
                                                                                              fontSize="35px"/> </a>
                </div>
                <FaArrowDown href='#id' className='arrow-down' fontSize="50px"/>
            </div>
        </Fragment>
    );
};

export default Header;
