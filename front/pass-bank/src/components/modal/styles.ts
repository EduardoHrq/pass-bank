import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  @keyframes showOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: showOverlay .5s ease forwards;

  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #3f3f4675;
  filter: blur(150px);
`

export const Content = styled(Dialog.Content)`

  @keyframes showModal {
    from {
      opacity: 0;
      scale: 0;
      transform: translate(300%, 50%);
      transform-origin: bottom right;
    }
    
    to {
      opacity: 1;
      scale: 1;
    }
  }

  animation: showModal .5s ease forwards;

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #09090b;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%; 

      & img {
        width: 4rem;
      }

      & input {
        width: 100%;
      }
    }

    input {
      border-radius: 6px;
      border: 0;
      background: #d4d4d8;
      padding: 1rem;
    }

    button[type='submit'] {
      height: 50px;
      border: 0;
      background: #2563eb;
      color: #FFF;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.25rem;
      cursor: pointer;
      transition: background-color 0.2s;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: #3b82f6;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: #a1a1aa;
`