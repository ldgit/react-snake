export interface Square {
  type: string;
  bodyPart?: 'tail' | 'head' | 'trunk';
  index?: number;
  id: string;
}

export interface GameState {
  field: Array<Array<Square>>;
  direction: string;
  snakeSize: number;
  foodConsumed: boolean;
  gameOver: boolean;
  score: number;
}
