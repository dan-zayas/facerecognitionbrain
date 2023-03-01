import React, { Component } from 'react';
import {ClarifaiStub, grpc} from "clarifai-nodejs-grpc";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import './App.css';

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key c34962f6a9e04a99870a48d71a112a1a");

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event);
  }

  onButtonSubmit = () => {
    console.log("click")
    stub.PostModelOutputs(
      {
          // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
          model_id: "aaa03c23b3724a16a56b629203edc62c",
          inputs: [{data: {image: {url: "https://samples.clarifai.com/dog2.jpeg"}}}]
      },
      metadata,
      (err, response) => {
          if (err) {
              console.log("Error: " + err);
              return;
          }
  
          if (response.status.code !== 10000) {
              console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
              return;
          }
  
          console.log("Predicted concepts, with confidence values:")
          for (const c of response.outputs[0].data.concepts) {
              console.log(c.name + ": " + c.value);
          }
      }
  );
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
                {/* 
        <FaceRecognition />  */}
        <ParticlesBg type="fountain" bg={true} />
      </div>
    );
  }
}

export default App;
