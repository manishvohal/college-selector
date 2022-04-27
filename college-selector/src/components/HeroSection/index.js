import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Find Your Perfect Match</HeroH1>
        <HeroP>Get Started Today!</HeroP>
        {/* <HeroBtnWrapper>
          <BtnLink to="/register" onMouseEnter={onHover} onMouseLeave={onHover}>
            Register {hover ? <ArrowForward /> : <ArrowRight />}
          </BtnLink>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
