import React from "react";
import "./avatarAnimation.css";
import centerPic from "../../Assets/center.png";
import samplePic from "../../Assets/aboutus.jpg";
import { images } from "../Api/imageList";
import { newimages } from "../Api/newImageList";

const AvatarAnimation = () => {
  return (
    <div className="outerpart-view">
      <div className="container">
        <div className="imageanimate">
          <div className="center-image">
            <img src={centerPic} alt="pic_center" />
          </div>

          <div className="rightMask">
            <div className="hole-line"></div>
            <div className="box">
              <div className="img">
                {newimages.map((res, index) => (
                  <div
                    key={index}
                    className="imgBx"
                    style={{ "--i": index + 1 }}>
                    <img src={res?.image} alt="pic" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="leftMask">
            <div className="box-right">
              <div className="img">
                {images.map((res, index) => (
                  <div
                    key={index}
                    className="imgBx"
                    style={{ "--i": index + 1 }}>
                    <img src={res?.image} alt="pic" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarAnimation;
