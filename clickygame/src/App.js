import React, { Component } from "react";
import imagesCard from "./components/imagesCard";
import Wrapper from "./components/Wrapper";
import images from './images.json.js';
import "./App.css";

class App extends Component{
  state = {
    images
  }


  render(){
      return(
    <Wrapper>

      <h1 className='title'>Click on a picture to play!</h1>
      {this.state.images.map(image => (
        <imagesCard
          image={image.image}
          click = 
          key = {image.id}

          />
      ))}
    </Wrapper>
      )
  }
}

export default App;

