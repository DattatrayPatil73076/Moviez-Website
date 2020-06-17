import React from "react";
import "./App.css";
import Slider from "infinite-react-carousel";
import Cards from "./components/card";

function App() {
  const SimpleSlider = () => (
    <Slider dots>
      <div>
        <img
          width="100%"
          height="250px"
          alt=""
          src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/11/disney-1573730313.jpg"
        />
      </div>
      <div>
        <img
          width="100%"
          height="250px"
          alt=""
          src="https://i.pcmag.com/imagery/articles/03Cig33w60xXUoRz3gvZC5c-1.fit_scale.size_2698x1517.v1582593596.jpg"
        />
      </div>
      <div>
        <img
          width="100%"
          height="250px"
          alt=""
          src="https://i.pcmag.com/imagery/articles/00LuaAOpAOxSvvPQBS7eca7-4.fit_scale.size_2698x1517.v1585057915.jpg"
        />
      </div>
    </Slider>
  );
  return (
    <div>
      <h1 style={{ margin: 30 }}>
        <span role="img" aria-label="Moviez-Website">
          {" "}
          🎬{" "}
        </span>
        Moviez-Website
      </h1>
      <SimpleSlider />
      <div className="header" style={{ margin: 10 }}>
        !! Trending Now !!
      </div>
      <div className="row">
        <Cards />
      </div>
    </div>
  );
}

export default App;
