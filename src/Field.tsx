import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { GameState, Square } from './core/types';
import { HEIGHT, WIDTH } from './core/utils';

const EmptySquare = styled.div`
  width: 3.4vh;
  height: 3.4vh;
`;

const SnakeSquare = styled(EmptySquare)`
  background-color: black;
`;

const SnakeHead = styled(SnakeSquare)`
  width: 3.4vh;
  height: 3.4vh;
`;

const SnakeTrunk = styled(SnakeSquare)`
  width: 3.1vh;
  height: 3.1vh;
`;

const SnakeTail = styled(SnakeSquare)`
  width: 2.5vh;
  height: 2.5vh;
`;

const FoodSquare = styled(EmptySquare)`
  background-color: #ff3e00;
  border-radius: 50%;
  width: 3vh;
  height: 3vh;
`;

const FieldSquare: FunctionComponent<{ square: Square }> = ({ square }) => {
  if (square?.type === 'snake') {
    switch (square.bodyPart) {
      case 'head':
        return <SnakeHead />;
      case 'trunk':
        return <SnakeTrunk />;
      case 'tail':
        return <SnakeTail />;
    }
  }

  if (square?.type === 'food') {
    return <FoodSquare />;
  }

  return <EmptySquare />;
};

const SnakeBox = styled.div`
  display: grid;
  grid-template-columns: repeat(${WIDTH}, 3.6vh);
  grid-template-rows: repeat(${HEIGHT}, 3.6vh);
  place-items: center center;
  gap: 0.15vh 0.15vh;
  padding: 0.15vh;
  border: 3px solid black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
    'Helvetica Neue', sans-serif;
`;

const Field: FunctionComponent<{ gameState: GameState }> = ({ gameState }) => {
  const renderedField = gameState.field.map((row, rowIndex) => {
    return row.map((square, columnIndex) => (
      <FieldSquare key={`${rowIndex}${columnIndex}`} square={square} />
    ));
  });

  return <SnakeBox>{renderedField}</SnakeBox>;
};

export default Field;
