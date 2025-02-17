/* eslint-disable */
import { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button, useMediaQuery, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import { Link } from 'react-router-dom';

import centerPic from "../../Assets/center.png";
import "./Banneranimation.scss";

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
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up(1024));

  const [radius, setRadius] = useState(265); // Default radius

  // Function to update radius based on screen width
  const updateRadius = () => {
    if (window.innerWidth > 420 && window.innerWidth < 600) {
      setRadius(210); // Smaller radius for mobile
    } else if(window.innerWidth < 425){
      setRadius(180);//small mobile screens
    }else{
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
    <Grid container direction={matchesMd ? 'row' : 'column'}
    sx={{ minHeight: { xs: '500px', md: '500px', lg: '500px' } }}
    justifyContent={'center'} wrap='nowrap' className="banner-animation">
      <Grid container justifyContent="center" sx={{ pl: {lg: '50px'}, p: { md: '10px', lg: '0px' } }} direction="column">
        <Typography
          // variant={matchesMd ? 'h2' : 'h4'}
          fontSize={{ xs: '2rem', md: '3rem' }}
          textAlign={matchesMd ? 'left' : 'center'}
          className="background-black-gradient"
          fontFamily="Raleway"
          fontWeight={600}
          sx={{
            [theme.breakpoints.up('lg')]: {
              textWrap: 'nowrap',
            },
          }}
          gutterBottom
        >
          The Future of Credentialing
        </Typography>
        <Typography
          variant={matchesMd ? 'h4' : 'h6'}
          textAlign={matchesMd ? 'left' : 'center'}
          className="background-black-gradient"
          fontFamily="Raleway"
          gutterBottom
        >
          Cleaner.Greener.Faster
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: matchesMd ? 'left' : 'center', mt: 2 }}>
          {/* <Link to="/profile/add"> */}
          <Button variant="contained" color="secondary" sx={{ color: 'black' }}>
            Free Trial
          </Button>
          {/* </Link> */}
          {/* <Button variant="outlined" color="secondary">
                  Login
                </Button> */}
          {/* <Button variant="outlined" onClick={handleSignInModal}>
                  <Typography>Login</Typography>
                </Button> */}
        </Box>
      </Grid>
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
    </Grid>
  );
};

export default Banneranimation;
