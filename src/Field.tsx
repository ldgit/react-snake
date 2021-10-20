import React, { FunctionComponent } from 'react';
import { GameState, Square } from './core/types';
import { HEIGHT, WIDTH } from './core/utils';

const FieldSquare: FunctionComponent<{ square: Square }> = ({ square }) => {
  if (square?.type === 'snake') {
    switch (square.bodyPart) {
      case 'head':
        return <div className="bg-black dark:bg-green-300 w-vh-large h-vh-large"></div>;
      case 'trunk':
        return <div className="bg-black dark:bg-green-300 w-vh-medium h-vh-medium"></div>;
      case 'tail':
        return <div className="bg-black dark:bg-green-300 w-vh-xs h-vh-xs"></div>;
    }
  }

  if (square?.type === 'food') {
    return <div className="rounded-full bg-svelte-red w-vh-small h-vh-small"></div>;
  }

  return <div className="w-vh-large h-vh-large"></div>;
};

const Field: FunctionComponent<{ gameState: GameState }> = ({ gameState }) => {
  const renderedField = gameState.field.map((row, rowIndex) => {
    return row.map((square, columnIndex) => (
      <FieldSquare key={`${rowIndex}${columnIndex}`} square={square} />
    ));
  });

  return (
    <div
      className="grid place-items-center gap-vh-small p-vh-small border-4 border-solid border-black dark:border-gray-200"
      style={{
        gridTemplateColumns: `repeat(${WIDTH}, 3.6vh)`,
        gridTemplateRows: `repeat(${HEIGHT}, 3.6vh)`,
      }}
    >
      {renderedField}
    </div>
  );
};

export default Field;
