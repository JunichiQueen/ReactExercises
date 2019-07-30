import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";


library.add(faStroopwafel, faMugHot, faJava, faReact);


class SubComponent extends Component {
    constructor(){
        super();
        this.state={
            data: ""
        }
    }
    myUserData = {
        username: "Max Payne",
        job: "Police Officer",
        age: "35",
    }
    makeRequest = () => {
        axios
          .get("http://www.omdbapi.com/?apikey=cf6d6c63&t=hop")
          .then(response => {
            this.setState({
              data: response.data
            });
          });
    };

    
    render() {
        const { Title, Year, Rated, Genre, Plot, Poster } = this.state.data;
        return (
            <div>
                Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
                Favorite Drink: <FontAwesomeIcon icon="mug-hot" />
                Also Coffee : <FontAwesomeIcon icon={["fab", "java"]} />
                <FontAwesomeIcon icon={["fab", "react"]} />
                <p>Component works</p>
                <h2>AutoFilm.js</h2>
                <h4>{Title}</h4>
                <h4>{Year}</h4>
                <h4>{Rated}</h4>
                <h4>{Genre}</h4>
                <h4>{Plot}</h4>
                <img src={Poster} />
                <button onClick={this.makeRequest}>MakeRequest</button>

            </div>
        );
    }
}

export default SubComponent;