import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Field from './Field';
import Settings from './Settings';
import Score from './Score';
import GameOver from './GameOver';
import { newGame } from './core/newGame';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledScore = styled.span`
  font-size: 2rem;
`;

const Title = styled.h1`
  color: #ff3e00;
  text-transform: uppercase;
  font-size: 8vh;
  font-weight: 100;
`;

const App: FunctionComponent = () => {
  const gameState = newGame();

  return (
    <Main>
      <Title>Snake</Title>
      <Game>
        <StyledScore>
          <Score current={50} />
        </StyledScore>
        <Field gameState={gameState} />
      </Game>
      <Settings delay={6} />
      {false && (
        <GameOver
          onNewGameClick={() => {
            console.log('');
          }}
          finalScore={0}
        />
      )}
    </Main>
  );
};

export default App;
