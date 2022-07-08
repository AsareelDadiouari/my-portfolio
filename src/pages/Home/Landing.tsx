import React, {Component, useEffect, useState} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";
import Work from "../../components/Work";
import './Landing.css'
import { FaArrowUp } from 'react-icons/fa';

const Landing = () => {
    const headerRef = React.useRef<HTMLDivElement>(null);
    const aboutRef = React.useRef<HTMLDivElement>(null);
    const projectRef = React.useRef<HTMLDivElement>(null);

    const [homeClick, setHomeClick] = useState(false);
    const [projectClick, setProjectClick] = useState(false);
    const [aboutClick, setAboutClick] = useState(false);

    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        if(homeClick){
            headerRef.current?.scrollIntoView({behavior: "smooth"});
            setHomeClick(false);
        }

        if(projectClick){
            projectRef.current?.scrollIntoView({ behavior: "smooth" });
            setProjectClick(false)
        }

        if(aboutClick){
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
            setAboutClick(false)
        }

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300)
                setScrollTop(true);
            else
                setScrollTop(false);
        });

    });

    return (
        <div>
        <Header reference={headerRef}
                referenceArrow={aboutRef}
                homeClick={setHomeClick}
                projectClick={setProjectClick}
                aboutClick={setAboutClick}/>

        <Skills reference={aboutRef}/> {/* About me, Work Experience */}
        <Work reference={projectRef}/> {/* Projects */}
        <Footer/>
        {
            scrollTop && 
            <FaArrowUp href='#id' onClick={() => setHomeClick(true)} className='arrow-up' fontSize="50px"/>
        }
        </div>
    )
}

export default Landing;
