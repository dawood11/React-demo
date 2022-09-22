import { useEffect, useState } from "react";

const useAgeChecker = (age) => {
  const [ageMessage, setAgeMessage] = useState('');

  useEffect(() => {
    console.log('age: ', age);
    if (age < 18) {
      setAgeMessage('Ikke myndig');
    } else {
      setAgeMessage('Myndig');
    }
  }, [age])

  return ageMessage;
};

export default useAgeChecker;