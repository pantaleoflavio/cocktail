import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/animation/not-found.json";
import { Link } from "react-router-dom";
const ErrorScreen = () => {
  return <Wrapper>
    <h3>
      Pagina non trovata
      <Lottie options={{
        loop: true,
        autoplay: true,
        reverse: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
      width={500}
      height={500}
      />
    </h3>
    <Link to="/" className="btn btn-primary">
      Torna in Home
    </Link>
  </Wrapper>;
};

const Wrapper = styled.section`
  min-height: 88vh;
  padding: 20px 0;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
    text-align: center;
  }
  .btn {
    border-radius: 22px;
  }
  @media screen and (min-width: 992px) {
    min-height: 88vh;
  }
`;

export default ErrorScreen;
