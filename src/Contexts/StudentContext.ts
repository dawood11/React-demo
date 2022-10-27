import { StudentType } from '../service/allMyStudents';
import { createContext } from 'react';

export interface StudentContextType {
  chosenStudent: StudentType | null;
  setChosenStudent: (x: StudentType) => void
}

export const StudentContext = createContext<StudentContextType>({} as StudentContextType);