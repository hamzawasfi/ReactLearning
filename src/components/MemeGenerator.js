import React from "react";
import { render } from "@testing-library/react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomMeme = this.state.allMemeImgs[randomNum].url;
    this.setState({
      randomImg: randomMeme,
    });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const memes = response.data.memes;
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <input
            type="text"
            name="topText"
            placeholder="top text"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <button>Generate</button>
        </form>
        <br />
        <br />
        <div>
          <h2>{this.state.topText}</h2>
          <img src={this.state.randomImg} alt="" />
          <h2>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
