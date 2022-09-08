import './App.css';

import Counter from './components/Counter';
import NameList from './components/NameList';
import { useState } from 'react';

const App = () => {
  const [adminMode, setAdminMode] = useState(false)


  return (
    <div className={"App"}>
      <button onClick={() => setAdminMode(!adminMode)}>Hehe</button>
      <Counter />
      <hr />
      <NameList adminMode={adminMode}/>
      <hr />
      <NameList adminMode={adminMode}/>
      <hr />
      <NameList adminMode={adminMode}/>
    </div>
  );
}

export default App;