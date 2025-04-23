
import React, { useState } from 'react';

const BallTransfer = () => {
  
  const [leftBalls, setLeftBalls] = useState([1, 2, 3, 4, 5]);
  const [rightBalls, setRightBalls] = useState([]);

  
  const moveToRight = (ball) => {
    setLeftBalls(leftBalls.filter((item) => item !== ball));
    setRightBalls([...rightBalls, ball]);
  };

  
  const moveToLeft = (ball) => {
    setRightBalls(rightBalls.filter((item) => item !== ball));
    setLeftBalls([...leftBalls, ball]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ border: '1px solid black', padding: '20px', width: '45%' }}>
        <h3>Div 1 (Left)</h3>
        {leftBalls.map((ball) => (
          <div
            key={ball}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: 'red',
              borderRadius: '50%',
              margin: '10px',
              cursor: 'pointer',
            }}
            onClick={() => moveToRight(ball)}
          >
            {ball}
          </div>
        ))}
      </div>

      <div style={{ border: '1px solid black', padding: '20px', width: '45%' }}>
        <h3>Div 2 (Right)</h3>
        {rightBalls.map((ball) => (
          <div
            key={ball}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: 'blue',
              borderRadius: '50%',
              margin: '10px',
              cursor: 'pointer',
            }}
            onClick={() => moveToLeft(ball)}
          >
            {ball}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BallTransfer;