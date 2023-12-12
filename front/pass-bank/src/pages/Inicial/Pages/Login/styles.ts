import styled from "styled-components";

export const BoxAlert = styled.div`

  @keyframes showWarnAlert {
    to {
      scale: 1;
      padding: 1rem;
      font-size: 1.2rem;
    }
  }

  background-color: #f87171;
  padding: 0;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  font-weight: bold;
  font-size: 0;
  scale: 0;
  border-radius: 12px;
  
  animation: showWarnAlert .5s ease forwards;

`