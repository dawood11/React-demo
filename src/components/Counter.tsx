import { useContext, useEffect, useState } from 'react';

import PrimaryButton from './common/PrimaryButton';
import { StudentContext } from '../Contexts/StudentContext';

const Counter = () => {
  const [counterState, setCounterState] = useState(10);
  const [message, setMessage] = useState('');

  const studentLocalContext = useContext(StudentContext);

  useEffect(() => {
    if (counterState === 15) {
      setMessage('hurraaa!!!!');
    }
  }, [counterState]);

  useEffect(() => {
    setCounterState(10);
  }, [message]);

  const handleIncrement = () => {
    setCounterState(counterState + 1);
  };

  return (
    <div>
      <h1>Counter: {counterState} {studentLocalContext.chosenStudent === null ? '' : "- " + studentLocalContext.chosenStudent.name}</h1>
      <h1>{message}</h1>
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