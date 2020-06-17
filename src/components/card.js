import React, { Component } from "react";
import Movie from "../movies.json";

export class card extends Component {
  constructor(props) {
    super();
    this.state = { movies: [] };
  }

  componentDidMount() {
    const mv = Movie.movie;
    const mvarr = [];

    mv.forEach((element, i) => {
      mvarr.push(
        <div className="column" key={element.mid}>
          <div className="card">
            <img
              src={element.img}
              alt="Avatar"
              style={{ width: `100%`, height: "280px" }}
            />
            <div className="container">
              <h4>
                <b>{element.title}</b>
              </h4>
              <p>
                <button className="button">
                  <a href={element.glink} target="blank">
                    View Online
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
      );
    });

    this.setState({ movies: mvarr });
  }

  render() {
    return <div>{this.state.movies}</div>;
  }
}

export default card;
