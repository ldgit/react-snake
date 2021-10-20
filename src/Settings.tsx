import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { speedMap, getDefaultSpeed } from './core/speedLevels';

const Settings: FunctionComponent<{ onSpeedChange: (speed: number) => void }> = ({
  onSpeedChange,
}) => {
  const [hovering, setHovering] = useState(false);
  const [speed, setSpeed] = useState(getDefaultSpeed());

  useEffect(() => {
    onSpeedChange(speedMap[speed].delay);
  }, [onSpeedChange, speed]);

  function handleSpeedChange(event: ChangeEvent<HTMLInputElement>) {
    const newSpeed = parseInt(event.target.value, 10);
    setSpeed(newSpeed);
    onSpeedChange(speedMap[newSpeed].delay);
  }

  return (
    <div
      className="mt-3 flex flex-col items-center justify-start h-12"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <span>{speedMap[speed].description}</span>
      <div className="mt-1">
        <input
          className={`w-56 mx-2 ${
            hovering ? 'opacity-100' : 'opacity-0'
          } transition duration-500 ease-in-out`}
          type="range"
          value={speed}
          min="0"
          max={speedMap.length - 1}
          step="1"
          onChange={handleSpeedChange}
        />
      </div>
    </div>
  );
};

export default Settings;
