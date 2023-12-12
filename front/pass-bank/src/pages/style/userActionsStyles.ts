import { Keyhole } from "phosphor-react";
import styled from "styled-components";

export const BoxContainer = styled.div`

  @keyframes showBox {
    from {
      opacity: 0;
      transform: translate(-50%, -30%);
    }
    to{
      opacity: 1;
      transform: translate(-50%, -50%);

    }
  }
  min-width: 32rem;
  border-radius: 12px;
  padding: 2rem;
  background-color: #09090b;


  position: fixed;
  top: 50%;
  left: 50%;

  color: #f5f5f5;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 8px;
      border: 0;
      background-color: #d4d4d8;
      padding: 1rem;


      &::placeholder {
        color: #52525b;
      }
    }

    button {
      height: 53px;
      border-radius: 8px;
      font-weight: bold;
      border: 0;
      margin: 1.25rem;
      cursor: pointer;
      padding: 0 1.25rem;
      background-color: #d4d4d8;
      box-shadow: 0 0 0 2px #09090b;

      transition: all .3s;

      &:not('disabled'):hover {
        background-color: #a1a1aa;
      }

      &:disabled {
        cursor: not-allowed;
        box-shadow: 0 0 0 2px #09090b, 0 0 0 4px #d4d4d8;
      }


    }
  }

  animation: showBox .5s ease forwards;

`

export const IconStyled = styled(Keyhole)`

  position: fixed;
  top: 4rem;
  left: 50%;

  transform: translate(-50%, -50%);

`