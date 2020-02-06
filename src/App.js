import React, { Component } from "react";
import "./App.css";
import paintings from "./paintings.json";

import Header from "./components/Header";
import Card from "./components/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      paintings: paintings,
      score: 0,
      msg: "Press a painting to start"
    };
  }

  componentDidMount() {
    this.shufflePaintings(paintings);
    this.setState(paintings);
  }

  handleClick = id => {
    let score = this.state.score;
    let msg = this.state.msg;
    const paintingsState = this.state.paintings;
    // Stores the painting clicked
    const paintingClicked = paintingsState.filter(
      painting => painting.id === id
    );
    if (paintingClicked[0].clicked) {
      score = 0;
      this.resetState();
      msg = "Press a painting to start";
    } else {
      paintingClicked[0].clicked = true;
      this.shufflePaintings(paintingsState);
      score++;
      msg = "You are doing great";
    }

    // Changes the state of clicked to true and shuffles the paintings
    this.setState({ paintingsState, score, msg });
  };

  shufflePaintings = paintings => {
    paintings.sort((a, b) => 0.5 - Math.random());
  };

  resetState = id => {
    const paintingsState = this.state.paintings;
    paintingsState.forEach(painting => {
      painting.clicked = false;
    });
    this.setState({ score: 0 });
  };

  render() {
    const { paintings, score, msg } = this.state;
    return (
      <div className="App">
        <Header score={score} msg={msg} />

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
