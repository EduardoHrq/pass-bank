import styled from "styled-components";

export const LoadingElement = styled.div`

  @keyframes loadingAnimation {
    from {
      scale: .5;
      opacity: 0;
    }
    to {
      scale: 1.2;
      opacity: 1;
    }
  }

  position: absolute;
  inset: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 4rem;
    height: 4rem;
    background-color: #737373;
    border-radius: 100%;

    animation: loadingAnimation .3s ease infinite alternate;

  }

`