export const Student = (props: any) => {
  const { currentStudent, clickableBtn } = props;

  return (
    // <div style={{ border: 'solid', margin: '5px' }} onClick={() => setChosenStudent(currentStudent)}>
    <div
      onClick={clickableBtn}
      style={{ border: 'solid', margin: '5px' }}
    >
      <h3>{currentStudent.name}</h3>
      <p>Age: {currentStudent.age}</p>
    </div>
  );
};