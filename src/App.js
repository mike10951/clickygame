import React, { Component } from "react";
import "./App.css";
import paintings from "./paintings.json";

import Header from "./components/Header";
import Card from "./components/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      paintings: paintings
    };
  }

  handleClick = id => {
    const paintingsState = this.state.paintings;
    // Stores the painting clicked
    const paintingClicked = paintingsState.filter(
      painting => painting.id === id
    );

    paintingClicked[0].clicked = true;
    this.shufflePaintings(paintingsState);
    // Changes the state of clicked to true and shuffles the paintings
    this.setState({ paintingsState });
  };

  shufflePaintings = paintings => {
    paintings.sort((a, b) => 0.5 - Math.random());
  };

  render() {
    const { paintings } = this.state;
    return (
      <div className="App">
        <Header />

        <div className="d-flex flex-wrap justify-content-center">
          {paintings.map(({ id, name, img, clicked }) => (
            <Card
              key={id}
              id={id}
              name={name}
              img={img}
              clickHandler={this.handleClick}
              clicked={clicked}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;