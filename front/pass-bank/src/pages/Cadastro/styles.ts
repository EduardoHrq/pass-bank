import styled from "styled-components";

export const HeaderCadastro = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const BoxAlertSucess = styled.div`

  @keyframes showConfirmAlert {
   from {
      opacity: 0;
      transform: translate(50%, 0);
   } 
   to {
      opacity: 1;
      transform: translate(0, 0);
   }
  }

  @keyframes loading {
    from {
      box-shadow: inset 0 0 0 0 #4ade8050;
    }
    to {
      box-shadow: inset 0 4rem 0 0 #4ade8050;
    }
  }

  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  min-width: 10rem;
  height: 4rem;

  font-weight: bold;

  background-color: #4ade8075;

  border-radius: 12px;

  position: fixed;
  top: 1rem;
  right: 1rem;

  animation: showConfirmAlert .5s ease forwards, loading 2.8s ease forwards;

`

export const BoxAlertWarn = styled.div`

  @keyframes showWarnAlert {
   to {
      scale: 1;
      padding: 1rem;
      font-size: 1.2rem;
    }
  }

  scale: 0;
  padding: 0;
  font-size: 0;

  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 10rem;
  height: 4rem;

  font-weight: bold;

  background-color: #f87171;

  border-radius: 12px;

  animation: showWarnAlert .5s ease forwards;

`