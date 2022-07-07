import React from 'react';
import './Skills.css'

const Skills = () => {
    const openInTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className='container-fluid skills'>
            <div className='container'>
                <p id="id" className=' title-about-me'>About Me</p>
                <p className='description'>Hello I'm Asaréel <b>/(Asareel)/ </b>, a student pursuing
                     a master degree in computer science at <span className='link-design' onClick={() => openInTab("https://www.uqac.ca")}>UQAC</span> (Saguenay, Quebec) who
                    previously worked mostly
                    through class projects with web frameworks and libraries like Angular and React. I have a 3 month
                    intership experience at a startup, and another work experience where I was hired as a freelance web developer for 4 month.
                    You can find my comptlete and detailed resume on my <span className='link-design' onClick={() => openInTab('https://www.linkedin.com/in/asareel-y-dadiouari/')}>Linkedin</span>. <br/> Thank you for reading !
                </p>
                <p className=' title-skills'>Skills</p>
                <div className='skills-set'>
                    <p className="languages">Frontend: React, Angular, VueJs</p>
                    <p className="languages">Backend: Node.js (Express), ASP .Net Core </p>
                    <p className="languages">Programming: Javascript, Typescript, C#, Java, Python </p>
                    <p className="languages">Databases: MongoDB, MySQL</p>
                    <p className="languages">Other: Git, IntelliJ, Rider, WebStorm, Android Studio, Visual Studio / Code</p>
                </div>
                <p className=' title-skills'>Work Experience</p>
                <div className='skills-set'>
                    <p className="languages">
                        <span style={{fontWeight: "bold"}}>Leap careers, Web developer - freelance </span> <br/>
                        Jan 2022 - Apr 2022 <br/>

                        • Migrated to the version 2.0 of the current platform from React to Angular (improved website 
                        responsiveness, support for different mobile formats, bug fixes). <br/>
                        • Implemented new functionalities on the mobile application (push notifications, chats…). <br/>
                        • Deployment with AWS. <br/>
                        Stack: Angular, Ionic, Amplify, Route 53, Lambda, GoDaddy

                    </p>
                    <p className="languages">
                        <span  style={{fontWeight: "bold"}}>wever, Full stack Developer Intern </span> <br/>
                        Jun 2021 - Aug 2021 <br/>

                        • Worked in a team of 3 to implement new modules to the company\’s main product and helped 
                        reduce code redundancy. <br/>
                        • Implemented an internal chat system that permits account managers to discuss with their clients. <br/>
                        Stack: ReactJs, Docker, GitLab, Symphony 5, PHP 
                    </p>
                </div>
            </div>
            <div>
                {
                    /*
                                <iframe src="https://www.slideshare.net/slideshow/embed_code/key/4WJBXVR7XE0uX3?hostedIn=slideshare&page=upload" width="476" height="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
                    */
                }
            </div>
        </div>
    );
};

export default Skills;
