import './App.css';

import { useEffect, useState } from 'react';

import Counter from './components/Counter';
import NameList from './components/NameList';
import { Student } from './components/Student/Student';
import { allMyStudents } from './service/allMyStudents';

const App = () => {
  const [adminMode, setAdminMode] = useState(false)
  const [studentsList, setStudentsList] = useState(allMyStudents);
  const [avgAge, setAvgAge] = useState(0);
  const [chosenStudent, setChosenStudent] = useState(null);

  useEffect(() => {
    console.log(chosenStudent);
  }, [chosenStudent]);

  const handleAvgAge = () => {
    let totalAge = 0;
    studentsList.map((student) => totalAge += student.age);
    setAvgAge(totalAge / studentsList.length);
  };

  return (
    <div className={"App"}>
      <div id={'new_project'}>
        {studentsList.map((student, index) => (
          <Student
            key={index}
            currentStudent={student}
            clickableBtn={() => setChosenStudent(student)}
          />
        ))}

        <button onClick={handleAvgAge}>Regn ut gjennomsnitssalder</button>

        <h1>Gjennomsnitts alder: {avgAge}</h1>
        {/* {chosenStudent === null ? <></> : <h1>The chosen one: {chosenStudent.name}</h1>} */}
        <h1>The chosen one: {chosenStudent === null ? null : chosenStudent.name}</h1>
      </div>

      <hr />
      <hr />
      <button onClick={() => setAdminMode(!adminMode)}>Hehe</button>
      <Counter />
      <hr />
      <NameList adminMode={adminMode} />
    </div>
  );
}

export default App;