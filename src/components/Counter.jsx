import PrimaryButton from './common/PrimaryButton';
import { useState } from 'react';

const Counter = () => {
  const [counterState, setCounterState] = useState(10);
  
  const handleIncrement = () => {
    setCounterState(counterState + 1);
  };

  return (
    <div>
      <h1>Counter: {counterState}</h1>
      
      <PrimaryButton
        disableBtn={false}
        text={"Increment"}
        onClick={handleIncrement}
        // onClick={() => setCounterState(counterState + 1)}
      />
    </div>
  );
}

export default Counter;