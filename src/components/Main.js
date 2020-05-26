import React from "react";
import VanillaTilt from "vanilla-tilt";
import me from "../assets/me.png";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";

let pageNumber = 0;
const dots = document.getElementsByClassName("dot");
// const currentDot = pageNumber;
// let i;

const bodyTag = document.querySelector("body");
// const dots = document.getElementsByClassName("dot");

const content = [
  //you can fill ARRAYS with OBJECTS by using curly brackets
  {
    copy: "A Front End Web Developer specializing in  pixel perfect websites.",
    background: "#09678c",
  },
  {
    copy: "Skilled in HTML5, CSS3,  & JavaScript ES6.",

    background: "#bcced2",
  },
  {
    copy:
      "Familiar with Bootstrap, SASS, JQuery, React, Ruby on Rails, NPM, & Git.",
    background: "#92BFB1",
  },
  {
    copy: "Inviting you to view his recent projects, here",
    background: " #fdfffc",
  },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "A Front End Web Developer specializing in pixel perfect websites.",
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.updateDot = this.prevPage.bind(this);
  }

  nextPage() {
    pageNumber = pageNumber + 1;

    if (pageNumber > content.length - 1) {
      pageNumber = 0;
    }
    bodyTag.style.backgroundColor = content[pageNumber].background;
    this.setState({
      content: `${content[pageNumber].copy}`,
    });
    if (pageNumber < 0) {
      pageNumber = dots.length + 1;
    }

    // dots[pageNumber - 1].classList.remove("thisdot");
    // dots[pageNumber].classList.add("thisdot");
  }

  //   for (i = 0; i < content.length; i++) {
  //     pageNumber[i].classList = "none";
  //     //remove .active from all dots
  //     y[i].classList.remove("thisdot");
  //   }
  //   x[slideIndex - 1].style.display = "block";
  //   //add .active to the selected dot
  //   y[slideIndex - 1].classList.add("thisdot");
  // }

  prevPage() {
    pageNumber = pageNumber - 1;
    if (pageNumber < 0) {
      pageNumber = content.length - 1;
    }
    bodyTag.style.backgroundColor = content[pageNumber].background;
    this.setState({
      content: `${content[pageNumber].copy}`,
    });
  }

  componentDidMount() {
    VanillaTilt.init(document.querySelector(".main-content"), {
      max: 25,
      speed: 400,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10,
    });
  }

  // function currentDiv(n) {
  //   showDivs(slideIndex = n);
  // }

  render() {
    return (
      <div class="try">
        <div id="main-content" className="appear">
          <div className="main-content data-tilt">
            <img className="tilt-s" src={me} alt="Beautiful Leroy Clarke Jr." />
            <h1 className="tilt-m">Leroy Clarke Jr. is...</h1>
            <div className="content">
              <p className="tilt-b">{this.state.content}</p>
            </div>
          </div>
        </div>
        <div id="navigation">
          <img
            className="prev"
            src={prevIcon}
            alt="previous"
            onClick={this.prevPage}
          />
          <div className="the-dots">
            <span className="dot thisdot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <img
            className="next"
            src={nextIcon}
            alt="next"
            onClick={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default Main;
