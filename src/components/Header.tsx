import React, {Fragment, Props} from 'react';
import './Header.css'
import {FaArrowDown, FaArrowUp, FaLinkedinIn, FaMailBulk} from "react-icons/fa"
import {Link} from 'react-router-dom'

const Header = (props: any) => {
    const openInTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Fragment>
            <div ref={props.reference} className='container-fluid Banner'>
                <p className='Name' > Asaréel DADIOUARI </p>
                <div className='NavBar'>
                    <Link to='/'>
                        <p onClick={() => props.homeClick(true)} className='NavBarElement'>Home</p>
                    </Link>
                    <Link to='/'>
                        <p onClick={() => props.projectClick(true)} className='NavBarElement'>Projects</p>
                    </Link>
                    <Link to='/'>
                        <p onClick={() => props.aboutClick(true)} className='NavBarElement'>About</p>
                    </Link>
                </div>
            </div>
            <div className='Header-Content'>
                <p className='display-3 text-center Header-Statement'> MSc. CS student at <br/>
                    <span className='Uqac-link' onClick={() => openInTab('https://www.uqac.ca')}>
                        <img height="100px" className='Uqac-logo'
                             src='https://www.uqac.ca/wp-content/themes/uqac/assets/images/uqac.svg'
                             alt='Logo'/>
                    </span>
                </p>
                <div className="container row">
                    <a title='Linkedin' target='_blank' rel="noopener noreferrer"
                       href='https://www.linkedin.com/in/yiemboiro-asar%C3%A9el-dadiouari-9ab235174/'> <FaLinkedinIn
                        className='linkedin-logo' fontSize="35px"/> </a>
                </div>
                <div className="container row">
                    <a title='Email' href='mailto:asareel.y.dadiouari@gmail.com'> <FaMailBulk className='email-logo'
                        fontSize="35px"/> 
                    </a>
                </div>
                <span onClick={() => props.aboutClick(true)} ref={props.referenceArrow}>
                    <FaArrowDown href='#id' className='arrow-down' fontSize="50px"/>
                </span>
            </div>
        </Fragment>
    );
};

export default Header;
