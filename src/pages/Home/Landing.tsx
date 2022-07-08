import React, {Component, useEffect, useState} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";
import Work from "../../components/Work";

const Landing = () => {
    const headerRef = React.useRef<HTMLDivElement>(null)
    const aboutRef = React.useRef<HTMLDivElement>(null)
    const projectRef = React.useRef<HTMLDivElement>(null)

    const [homeClick, setHomeClick] = useState(false)
    const [projectClick, setProjectClick] = useState(false)
    const [aboutClick, setAboutClick] = useState(false)

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
    })

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
        </div>
    )
}

export default Landing;
