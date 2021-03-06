import React, { FunctionComponent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Field from './Field';
import Settings from './Settings';
import Score from './Score';
import GameOver from './GameOver';
import startSnakeGame from './core/snake';
import { GameState } from './core/types';

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

const initialSnakeGame = startSnakeGame({});

const App: FunctionComponent = () => {
  const [snakeGame, setSnakeGame] = useState(initialSnakeGame);
  const [gameState, setGameState] = useState<GameState | undefined>(undefined);

  useEffect(() => {
    snakeGame.subscribe((newGameState) => setGameState(newGameState));
    return snakeGame.destroy;
  }, [snakeGame]);

  useEffect(() => {
    function handleKeypress(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      if (key === 'w') {
        snakeGame.changeDirection('up');
      } else if (key === 's') {
        snakeGame.changeDirection('down');
      } else if (key === 'd') {
        snakeGame.changeDirection('right');
      } else if (key === 'a') {
        snakeGame.changeDirection('left');
      } else if (key === 'p') {
        snakeGame.togglePause();
      }
    }
    window.addEventListener('keypress', (handleKeypress as unknown) as EventListener);

    return () =>
      window.removeEventListener('keypress', (handleKeypress as unknown) as EventListener);
  }, [snakeGame]);

  // Prevents unnecessary renders of Settings component.
  const handleSpeedChange = useCallback(
    (newDelay: number) => {
      snakeGame.changeDelayBetweenMoves(newDelay);
    },
    [snakeGame],
  );

  if (!gameState) {
    return <></>;
  }

  function restart() {
    snakeGame.destroy();
    setSnakeGame(startSnakeGame({}));
  }

  return (
    <Main>
      <Title>Snake</Title>
      <Game>
        <StyledScore>
          <Score current={gameState.score} />
        </StyledScore>
        <Field gameState={gameState} />
      </Game>
      <Settings onSpeedChange={handleSpeedChange} />
      {gameState.gameOver && <GameOver onNewGameClick={restart} finalScore={gameState.score} />}
    </Main>
  );
};

export default App;
