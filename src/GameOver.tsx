import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.9;
  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;

  h1 {
    color: white;
  }

  p {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 6vh;
  }

  button {
    position: relative;
    border-style: none;
    border-radius: 0.4rem;
    width: 180px;
    height: 3.5rem;
    background-color: #ff3e00;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 8px 22px;
    text-transform: uppercase;
  }

  button:hover {
    background-color: #ff4000c5;
    cursor: pointer;
  }

  button:active {
    background-color: #ff3e00;
    cursor: pointer;
  }
`;

const GameOver: FunctionComponent<{ onNewGameClick: () => void; finalScore: number }> = ({
  onNewGameClick,
  finalScore,
}) => {
  return (
    <Overlay>
      <h1>Game over</h1>
      <p>Final score: {finalScore}</p>
      <button onClick={onNewGameClick}> New game </button>
    </Overlay>
  );
};

export default GameOver;
