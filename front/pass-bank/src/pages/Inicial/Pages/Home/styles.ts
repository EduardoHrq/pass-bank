import styled from "styled-components";

export const HeaderContainer = styled.header`

  @keyframes showHeader {
    from {
      transform: translate(0, -100%);
    }
    to {
      transform: translate(0, 0);
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #09090b;
  padding: 0 2rem;
  height: 5rem;

  animation: showHeader .7s ease forwards;

`

export const UserContainer = styled.div`

  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
    font-weight: bold;
  }

  .buttonLogout {
    width: 35px;
    height: 35px;
    padding: .5rem;
    border-radius: 9999px;
    transition: all .3s;
    cursor: pointer;
  }

  .buttonLogout:hover {
    background-color: #27272a;
  }

`

export const FilterContainer = styled.div`

  display: flex;
  align-items: center;
  gap: .7rem;

  a {
    background-color: #27272a;
    line-height: 3rem;
    height: 3rem;
    padding: 0 1rem;
    color: #FFF;
    border-radius: 12px;
    min-width: 5rem;
    text-align: center;
    text-decoration: none;

    transition: all .3s;
    
    &:hover {
      background-color: #52525b;
    }

  }

  form {
    input {
      height: 3rem;
      padding: 0 1rem;
      border-radius: 12px 0 0 12px;
      border: none;
      background-color: #d4d4d8;
    }

    button {
      height: 3rem;
      background-color: #a1a1aa;
      padding: 0 1rem;
      border-radius: 0 12px 12px 0;
      border: none;
      cursor: pointer;
    }
  }

`

export const ContentContainer = styled.main`

  max-width: 74rem;
  height: calc(100vh - 6rem);
  margin: 1rem auto 0;
  padding: 2rem 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 7rem;
  gap: 1.5rem;

  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 1px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 9999px;
  }
  
  ::-webkit-scrollbar-track {
    width: 1px;
  }

`

export const ButtonModal = styled.button`

  background-color: #d4d4d8;

  border: 0;
  border-radius: 9999px;
  line-height: 0;
  padding: .5rem;

  position: fixed;
  bottom: 1rem;
  right: 1rem;
  box-shadow: 0 0 0 0 #18181b;

  transition: all .3s;

  &:hover {
    box-shadow: 0 0 0 2px #18181b, 0 0 0 4px #d4d4d8;
  }

`