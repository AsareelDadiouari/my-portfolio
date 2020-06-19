import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Work from "../components/Work";

class Landing extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Skills/>
                <Work/>
                <Footer/>
            </div>
        );
    }
}

export default Landing;
