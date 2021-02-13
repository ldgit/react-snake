import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { speedMap, getDefaultSpeed } from './core/speedLevels';

const Controls = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  min-width: 500px;

  /* BEGIN Apply styles that allow us to customize range input */
  input[type='range'] {
    -webkit-appearance: none;
    width: 15vw; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type='range']:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type='range']::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  /* END Apply styles that allow us to customize range input */

  /* Special styling for WebKit/Blink */
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid #000000;
    height: 16px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }

  /* All the same stuff for Firefox */
  input[type='range']::-moz-range-thumb {
    border: 2px solid #000000;
    height: 16px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }

  input[type='range']:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type='range']::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  button {
    border: 2px solid black;
    background-color: white;
    height: 24px;
    font-weight: bold;
    font-size: 14px;
  }

  button:hover {
    background-color: black;
    color: white;
  }
`;

const SpeedControl = styled.div`
  display: flex;
  margin-top: 4px;
`;

const Settings: FunctionComponent<{ delay: number }> = ({ delay }) => {
  let speed = getDefaultSpeed();
  // delay = speedMap[speed].delay;
  return (
    <Controls>
      <span>{speedMap[speed].description}</span>
      <SpeedControl>
        <button onClick={() => (speed > 0 ? (speed -= 1) : null)}>&#xFF0D;</button>
        <input type="range" value={speed} min="0" max={speedMap.length - 1} step="1" />
        <button onClick={() => (speed < speedMap.length - 1 ? (speed += 1) : null)}>
          &#xFF0B;
        </button>
      </SpeedControl>
    </Controls>
  );
};

export default Settings;
