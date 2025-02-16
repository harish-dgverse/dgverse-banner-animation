import { useEffect, useState } from "react";
import centerPic from "../../Assets/center.png";
import "./Banneranimation.css";


const images = [
  "/Assetsimages/banner-animation/oldCert1.svg",
  "/Assetsimages/banner-animation/oldCert2.svg",
  "/Assetsimages/banner-animation/oldCert3.svg",
  "/Assetsimages/banner-animation/oldCert4.svg",
  "/Assetsimages/banner-animation/oldCert5.svg",
  "/Assetsimages/banner-animation/oldCert1.svg",
  "/Assetsimages/banner-animation/oldCert1.svg",
  "/Assetsimages/banner-animation/oldCert2.svg",
];

const imagesRight = [
  "/Assetsimages/banner-animation/modernCert1.svg",
  "/Assetsimages/banner-animation/modernCert2.svg",
  "/Assetsimages/banner-animation/modernCert3.svg",
  "/Assetsimages/banner-animation/modernCert4.svg",
  "/Assetsimages/banner-animation/modernCert5.svg",
  "/Assetsimages/banner-animation/modernCert1.svg",
  "/Assetsimages/banner-animation/modernCert1.svg",
  "/Assetsimages/banner-animation/modernCert2.svg",

];


const Banneranimation = () => {
  const [radius, setRadius] = useState(265); // Default radius

  // Function to update radius based on screen width
  const updateRadius = () => {
    if (window.innerWidth < 600) {
      setRadius(210); // Smaller radius for mobile
    } else {
      setRadius(265); // Default radius for larger screens
    }
  };

  useEffect(() => {
    updateRadius(); // Set initial value
    window.addEventListener("resize", updateRadius); // Listen for screen resize

    return () => {
      window.removeEventListener("resize", updateRadius); // Cleanup listener
    };
  }, []);

  return (
    <div className="outer-part">


<div className="side-outer">
      <div className="hole">
        <div className="circle"></div>
      </div>
      <div className="center-image">
        <img src={centerPic} alt="" />
      </div>
      <div className="leftside">
      <div className="circle-wrapper">
      <div className="circle-container">
        {imagesRight.map((img, index) => {
          const angle = (index / images.length) * 360; // Distributes images in a full circle
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              className="circle-image"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            />
          );
        })}
      </div>
    </div>
      </div>
      <div className="rightside">
      <div className="circle-wrapper">
      <div className="circle-container">
        {images.map((img, index) => {
          const angle = (index / images.length) * 360; // Distributes images in a full circle
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              className="circle-image"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            />
          );
        })}
      </div>
    </div>
      </div>
</div>

    
    </div>
  );
};

export default Banneranimation;
