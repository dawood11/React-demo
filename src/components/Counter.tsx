import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrimaryButton from './common/PrimaryButton';
import { RootStateType } from '../redux/store';
import { StudentContext } from '../Contexts/StudentContext';
import { toggleAdminMode } from '../redux/adminSlice';

const Counter = () => {
  const [counterState, setCounterState] = useState(10);
  const [message, setMessage] = useState('');
  const adminMode = useSelector((state: RootStateType) => state.admin.adminMode)
  const dispatch = useDispatch();

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
    console.log(adminMode);
    dispatch(toggleAdminMode());
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