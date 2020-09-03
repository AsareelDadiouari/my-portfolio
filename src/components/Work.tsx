import React from 'react';
import './Work.css'
import {Button, Table} from 'react-bootstrap'

const Work = () => {
    return (
        <div className="container Work">
            <p className="my-top-projects">My Top Projects</p>
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
