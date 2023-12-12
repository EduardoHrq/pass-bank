import styled from "styled-components";

interface CardProps {
  delay: string
}

export const CardContainer = styled.div<CardProps>`

  @keyframes showCard {
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  opacity: 0;
  transform: translate(-10%, 0);

  max-width: 22.5rem;
  background-color: #09090b;
  border-radius: 12px;
  height: 7rem;
  

  .image {
    width: 7rem;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 100%;
    }
  }

  display: flex;

  .content-acc {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;

    & header {
      text-align: center;
      padding: .5rem 0;
      font-weight: bold;
    }

    & .account {
      flex: 1;
      padding: 0 1rem;
      background-color: gray;
      border-radius: 0 0 12px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  animation: showCard .5s ease forwards ${p => p.delay};

`