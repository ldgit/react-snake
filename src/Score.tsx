import React, { FunctionComponent, useEffect, useState } from 'react';
import startScoring from './core/score';

const Score: FunctionComponent<{ current: number }> = ({ current }) => {
  const [score, setScore] = useState(0);
  const [scoreStore] = useState(startScoring());

  useEffect(() => {
    const unsubscribe = scoreStore.subscribe((newScore) => {
      setScore(newScore);
    });

    return unsubscribe;
  }, [scoreStore]);

  scoreStore.newScore(current);

  return (
    <>
      Score: <span>{score}</span>
    </>
  );
};

export default Score;
