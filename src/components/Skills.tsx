import React from 'react';
import './Skills.css'
import {ProgressBar} from "react-bootstrap";

const Skills = () => {
    return (
        <div className='container-fluid skills'>
            <div className='container'>
                <p id="id" className=' title-about-me'>About Me</p>
                <p className='description'>Hello I'm Asaréel <b>/(Asareel)/ </b>, a computer science student who
                    previously worked mostly
                    through class projects with web frameworks <br/> and libraries like Angular and React. During this
                    year i've also worked
                    a lot with Java and made couples of projects in teamwork. My <br/> most personal projects was
                    involving mostly C and C++
                    with which I created an API with Qt and small games with SDL2.
                </p>
                <p className=' title-skills'>My Skills</p>
                <div className='skills-set'>
                    <p className="languages">Angular</p>
                    <ProgressBar srOnly now={60} label={`${60}%`} animated={true} max={100}/>

                    <p className="languages">React</p>
                    <ProgressBar srOnly now={55} label={`${55}%`} animated={true} max={100}/>

                    <p className="languages">Android</p>
                    <ProgressBar srOnly now={50} label={`${50}%`} animated={true} max={100}/>

                    <p className="languages">Java</p>
                    <ProgressBar srOnly className='prog' now={65} label={`${65}%`} animated={true} max={100}/>

                    <p className="languages">C/C++</p>
                    <ProgressBar srOnly now={80} label={`${80}%`} animated={true} max={100}/>

                </div>
            </div>
        </div>
    );
};

export default Skills;
