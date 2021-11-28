import React, { FunctionComponent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import Field from './Field';
import Settings from './Settings';
import Score from './Score';
import GameOver from './GameOver';
import startSnakeGame from './core/snake';
import { GameState } from './core/types';
import { updateAppearance } from './core/utils';

const App: FunctionComponent = () => {
  const [snakeGame, setSnakeGame] = useState(() => startSnakeGame({}));
  const [gameState, setGameState] = useState<GameState | undefined>(undefined);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    snakeGame.subscribe((newGameState) => setGameState(newGameState));
    return snakeGame.destroy;
  }, [snakeGame]);

  useEffect(() => {
    updateAppearance(darkMode);
  }, [darkMode]);

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
    window.addEventListener('keypress', handleKeypress as unknown as EventListener);

    return () => window.removeEventListener('keypress', handleKeypress as unknown as EventListener);
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

  function toggleDarkMode() {
    setDarkMode((previous) => !previous);
    updateAppearance(darkMode);
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="uppercase text-7xl text-svelte-red font-thin my-12">Snake</h1>
      <div className="flex flex-col items-start">
        <span className="flex justify-between text-3xl w-full">
          <span>
            <Score current={gameState.score} />
          </span>
          <button onClick={toggleDarkMode}>{darkMode ? '☀️' : '🌙'}</button>
        </span>
        <Field gameState={gameState} />
      </div>
      <Settings onSpeedChange={handleSpeedChange} />
      {gameState.gameOver && <GameOver onNewGameClick={restart} finalScore={gameState.score} />}
    </main>
  );
};

export default App;
