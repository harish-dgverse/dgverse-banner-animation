import { FC } from 'react';
import { Box, Container, Typography, Grid, Stack, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import starOne from '../../Assets/introImages/star-1.svg';
import nftSatellite from '../../Assets/introImages/nft-satellite.svg';
import starTwo from '../../Assets/introImages/star-2.svg';
import starThree from '../../Assets/introImages/star-3.svg';
import astronautTwo from '../../Assets/introImages/astronaut-2.png';
import introFeatureIcon from '../../Assets/introImages/intro-feature-icon.svg';
import React from 'react';
import "./satellite.scss";

const introContent = [
  {
    title: 'Secure and Tamper-Proof: ',
    description:
      'Credentials are stored as NFTs and SBTs on Blockchain/DLT, ensuring they are immutable, tamper-resistant, and uniquely identifiable.',
  },
  {
    title: 'Decentralized Ownership: ',
    description: 'Credentials are managed on a decentralized platform, providing transparency and user control.',
  },
  {
    title: 'Portable and Globally Verifiable: ',
    description: 'Credentials can be accessed and verified from anywhere, instantly and effortlessly.',
  },
  {
    title: 'Seamless Integration: ',
    description: 'Our API easily connects with your existing systems for smooth credential management.',
  },
];

// eslint-disable-next-line no-shadow
const FeatureCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const IntroSection: FC = () => {
  const isMobile = useMediaQuery('(max-width: 720px)');
  return (
    <Box className="content-section-view">
      <Container maxWidth="lg">
        {/* Star and Satellite Decorations */}
        <Box
          sx={{
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            // display: 'flex',
            // justifyContent: 'space-between',
          }}
        >
          {/* <img src={starOne} alt="Star" />
          <img src={nftSatellite} alt="NFT Satellite" />
          <img src={starTwo} alt="Star" /> */}
          {/* <img src={starThree} alt="Star" /> */}
        </Box>

        <Grid container flexDirection={isMobile ? 'column' : 'row'} wrap="nowrap" columnGap={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="credential-image-part">
              <div className="credential-satlite-image">
              <img className="top-pic" src={starOne} alt="Star" />
              <img className="middle-pic" src={nftSatellite} alt="NFT Satellite" />
              <img className="bottom-pic" src={starTwo} alt="Star" />
              </div>
              <img className="astronut-img" src={astronautTwo} alt="Astronaut" style={{ width: '100%', maxWidth: 300 }} />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="credential-content-part">
              <div className="credential-content-img">
              <img src={starThree} alt="Star" />
              </div>
            <Typography fontSize={{ xs: '2rem', md: '3rem' }} fontFamily="Raleway" fontWeight={600} gutterBottom>
              Credentials That Work Smarter
            </Typography>
            <Stack spacing={2}>
              {introContent.map((feature) => (
                <FeatureCard key={feature.title}>
                  <img src={introFeatureIcon} alt="Feature Icon" style={{ width: 50 }} />
                  <Typography>
                    <b>{feature.title}</b>
                    {feature.description}
                  </Typography>
                </FeatureCard>
              ))}
            </Stack>
            </div>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroSection;
