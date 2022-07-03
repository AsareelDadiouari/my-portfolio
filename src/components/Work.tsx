import React from 'react';
import './Work.css'
import {Button, Table} from 'react-bootstrap'

const Work = () => {
    return (
        <div className="container Work">
            <p className="my-top-projects">Projects</p>
            <Table className='Table' striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Languages</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                        <a href='https://github.com/AsareelDadiouari/Lets-go-biking'> Let's Go biking </a>
                        <img className='LetGoBiking' height={150} alt='LetGoBiking'
                             src="https://camo.githubusercontent.com/12ce27f16c5680b3ccf607b71a4db5ab5e0c44a77addfc5517f98b9f7d7bbded/68747470733a2f2f692e696d6775722e636f6d2f736b576c33395a2e706e67"
                        />
                    </td>
                    <td>
                        A Web And Desktop application that allows get directions from one place to another using JCDecaux Bikes.
                    </td>
                    <td>.Net Framework, WCF, ReactJs, WPF.</td>
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>
                        <a href='https://github.com/AsareelDadiouari/PS7-PolyVilleActive'> Poly Ville Active </a>
                        <img className='PolyVilleActive' height={500} alt='PolyVilleActive'
                             src="https://camo.githubusercontent.com/b6ccde0660b3a99717509fcb7e033c489fbba40b9e8f43b36b5a2a1ffee3f77b/68747470733a2f2f692e696d6775722e636f6d2f6746616f6e4a482e676966"
                        />
                    </td>
                    <td>Created in a group of 4, a web platform aimed to provide a “Guide” for different actors (tourists, 
                        merchants, etc.) of a fictional city, PolyVille.
                    </td>
                    <td>JENA Fuseki, Spring Boot, VueJs, RDF/SPARQL.</td>
                </tr>
                </tbody>

                <tbody>
                <tr>
                    <td>
                        <a href='https://github.com/2019-2020-ps6/2019-2020-ps6-rendu-triangular'> PolyQuiz </a>
                        <img className='Polyquiz'
                             src={require('../img/polyquiz.png')}
                             width={711} alt='Polyquiz'/>
                    </td>
                    <td>A website with Angular which allows to configure a quiz adapted to aging people having
                        difficulties
                        to use a computer tool
                    </td>
                    <td>Typescript, Javascript, HTML5, CSS3</td>
                </tr>

                </tbody>

                <tbody>
                <tr>
                    <td>
                        <a href='https://github.com/laudienp/special-garbanzo'> Birdstagram </a>
                        <img className='Birdstagram' height={500} alt='Birdstagram'
                             src={require('../img/Birdstagram.png')}
                        />
                    </td>
                    <td>A mobile application for monitoring the presence and / or migration of birds by means of user
                        signals
                    </td>
                    <td>Java</td>
                </tr>
                </tbody>

            </Table>
            <Button type='button' href='https://github.com/AsareelDadiouari?tab=repositories'> See Github Repo</Button>
        </div>
    );
};

export default Work;
