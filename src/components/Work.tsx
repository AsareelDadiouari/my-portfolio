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
                <td>
                    <a href='https://github.com/2019-2020-ps6/2019-2020-ps6-rendu-triangular'> PolyQuiz </a>
                    <img className='Polyquiz'
                         src='https://lh3.googleusercontent.com/V9jiLui_3W-1yVUP7DQN-FtyTdhclD88Yo-dnc1JF_6xAa35S0LQWkrGhC_Rtm2EykBPnXheE8na0BP6bRpTsdzo2HQb5f4jE3UaRDMCB2It1wjTJ2T_xA8ic5Vw4mEcGvbfK25eK7kAfd0S-M-2nd0M9njQAADVTNsOrhZdW0pPAX0T4lq7j1KMaa7GRrNaze4FLbkXFT9UmNTzK9Be_iLZhnzwJT8zCUaUjryYh5XIiwMo5ABKONyOxmVfknHIcLkrMgKVcGMvvp6OoW3oSfLNw9wlkjQaYg4CkjdkPDPu6MTwURK3fmn1nnIQiZwVuIJrnFskQdAbiaImz8CEt51x6O8Mq_mhLYvNpRWI3eJS7pD07DrwwQde1cO4Ymom0M0XyEMbKmGWbYbt6b-djU4rV_9l3hT_21nmcMZiu-jsaCAxr_a2SBs3CoSVp7NMSgKF82P3v0_bY-F5m636-wn4foI0uE5iZcPAO-2KufNVzyZvOkUSOrYnnCIRYB9602IfY_TMcOsOlDEJUnb-gfC8VoA5ZZonaPdhzhn_T469Ro95FmQe3DK-DTRTHsQLl4LhJ9CE5J6LfYKvEomxR0OK3e0UudZdloq7DIhXY45rg7BSwFFWzsu5Kf29QnHtVA33tdRliJUoIHFYngA558eu6yRcBeTw2a_aQ12YwcNjuDCDEgmBLAlFm-z36NM=w1909-h910-no?authuser=0'
                         width={711} alt='Polyquiz'/>
                </td>
                <td>A website with Angular which allows to configure a quiz adapted to aging people having difficulties
                    to use a computer tool
                </td>
                <td>Typescript, Javascript, HTML, CSS</td>
                </tbody>

                <tbody>
                <td>
                    <a href='https://github.com/laudienp/special-garbanzo'> Birdstagram </a>
                    <img className='Birdstagram' height={500} alt='Birdstagram'
                         src='https://lh3.googleusercontent.com/Tmk0yiFw21FC_G8ET7fLp3CysXRv5TacZEZXdApyndoVuqtS_rWfPgGyISgyqe2nLI70JVFhW061_XsRLAEpsDVqepqvOQR_BzEjiOcG0c8EBfaCOHwy0JCz0ncRUyEesOpa-DhB36N1iHbOBIQ1QXZ4UQGdph8_x3B_SrB1tKxqeBaznTHtquw-cuJaiUWRmxNEzXuLVHmcV5zy3d4TXt-zk_BsNVlq1E09v7ted8-P6mDrGMz7VT1mluF98Fsj-_Z5xNHasLzWBgcMFosRoyS8ze0f_l0lPhPAwFtCfaqK1SYu0RwvnpYZVYpxYZ2cHnbEGz4ZNlCp7W7yNxQlM1fccO1UXN677jrpw7R1yIGd0AR6nJyzlSQZ67mSwZyD4YSGkXMlfNBJfS80iKBep0f7tnCm9eyxRVMUTsSU9NPWjOv4x0gtMqB7LkxTTQSovVsxvjV5B09rGMzAKJU6ThgEVJkNLYWhm0MQKgtA6ldg7Yge4IPJvJpesEOHbD6gRYpRycbU1nl1Cz-7NJp1uQq006ox8bCM2-XLE2w-8tCnbykSFUD52k28lfJmr0evNYiy5Xsnrl4FC2mk7UINC_Zo9zOA14oyZJ6RZkyoBjoJ9iwhuDCMpR3fUPSkUnduSSuC0UKt9O9hijUfaEAwg-vjVKHGMqR8c0dNrwpALuNO3lfzsdy0-f4fwQua7JA=w386-h854-no?authuser=0'/>
                </td>
                <td>A mobile application for monitoring the presence and / or migration of birds by means of user
                    signals
                </td>
                <td>Java</td>
                </tbody>
            </Table>
            <Button type='button' href='https://github.com/AsareelDadiouari?tab=repositories'> See Github Repo</Button>
        </div>
    );
};

export default Work;
