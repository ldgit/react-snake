import React, { FunctionComponent } from 'react';

const GameOver: FunctionComponent<{ onNewGameClick: () => void; finalScore: number }> = ({
  onNewGameClick,
  finalScore,
}) => {
  return (
    <div className="flex items-center justify-center flex-col opacity-90 bg-black fixed w-full h-full top-0 left-0 z-50">
      <h1 className="text-white text-3xl my-5">Game over</h1>
      <p className="text-svelte-red uppercase text-7xl m-16">Final score: {finalScore}</p>
      <button
        className="relative border-none rounded-md w-44 h-14 bg-svelte-red text-white text-base font-bold uppercase px-2 py-4 hover:bg-svelte-red-dark"
        onClick={onNewGameClick}
      >
        New game{' '}
      </button>
    </div>
  );
};

export default GameOver;
