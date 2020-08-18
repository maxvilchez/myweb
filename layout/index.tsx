import styled from "styled-components";

export const Container = styled.main`
  margin-top: 0px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

/**
 * Section Home
 */

export const HomeSection = styled.section`
  position: relative;
`;

export const BackgroundVideo = styled.div`
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;
  background-color: #ccc;
`;

export const BackgroundDimmer = styled.div`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
`;

export const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
`;

export const Caption = styled.div`
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const PrimaryHeader = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  margin: 0;
  font-weight: 500;
`;

export const SecondaryHeader = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin: 0;
  font-weight: 400;
`;

/**
 * Section About
 */

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 85px 20px;
`;
