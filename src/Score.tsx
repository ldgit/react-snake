import React, { FunctionComponent } from 'react';

const Score: FunctionComponent<{ current: number }> = ({ current }) => {
  return (
    <>
      Score: <span>{current}</span>
    </>
  );
};

export default Score;
