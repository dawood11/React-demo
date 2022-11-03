import './App.css';

import { StudentType, allMyStudents } from './service/allMyStudents';
import { useDispatch, useSelector } from 'react-redux';

import Counter from './components/Counter';
import NameList from './components/NameList';
import { RootStateType } from './redux/store';
import { Student } from './components/Student/Student';
import { StudentContext } from './Contexts/StudentContext';
import { toggleAdminMode } from './redux/adminSlice';
import { useState } from 'react';

const App = () => {
  // const [adminMode, setAdminMode] = useState(false)
  const adminMode = useSelector((state: RootStateType) => state.admin.adminMode);
  const dispatch = useDispatch();
  const [studentsList] = useState<StudentType[]>(allMyStudents);
  const [avgAge, setAvgAge] = useState(0);
  const [chosenStudent, setChosenStudent] = useState<StudentType | null>(null);

  const handleAvgAge = (): void => {
    let totalAge = 0;
    studentsList.map((student: StudentType) => totalAge += student.age);
    setAvgAge(totalAge / studentsList.length);
  };

  return (
    <StudentContext.Provider value={{ chosenStudent, setChosenStudent }}>
      <div className={"App"}>
        <div id={'new_project'}>
          {studentsList.map((student: StudentType, index) => (
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
        <button onClick={() => dispatch(toggleAdminMode())}>Hehe</button>
        <Counter />
        <hr />


        <NameList adminMode={adminMode} />
      </div>
    </StudentContext.Provider>
  );
}

export default App;