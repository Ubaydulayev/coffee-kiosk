import React from "react";
import video from "./screen.mp4";
import { Link } from "react-router-dom";
import Style from "./Style";

const welcome = () => {
  return (
    <Style>
      <div className="body">
        <div className="video shadow">
          <video src={video} className="vid" height={500} controls autoPlay></video>
        </div>
        <div className="title">
          <Link to={"/kiosk"} className="title">Continue - Kiosk</Link>
        </div>
      </div>
    </Style>
  );
};

export default welcome;
