import { StudentType } from '../../service/allMyStudents';

interface StudentPropType {
  currentStudent: StudentType;
  clickableBtn: () => void;
};

export const Student = (props: StudentPropType) => {
  const { currentStudent, clickableBtn } = props;

  return (
    // <div style={{ border: 'solid', margin: '5px' }} onClick={() => setChosenStudent(currentStudent)}>
    <div
      onClick={clickableBtn}
      style={{ border: 'solid', margin: '5px', cursor: 'pointer' }}
    >
      <h3>{currentStudent.name}</h3>
      <p>Age: {currentStudent.age}</p>
    </div>
  );
};