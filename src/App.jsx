import './App.css';

import PrimaryButton from './components/common/PrimaryButton';

const App = () => {

  const handleClick = () => {
    console.log("Hei verden! :)");
  };

  return (
    <div className={"App"}>
      <h1>Hello wsorld</h1>
      <PrimaryButton
        disableBtn={true}
        text={"Ikke klikk meg!"}
        onClick={handleClick}
      />

      <PrimaryButton
        disableBtn={false}
        text={"Klikk meg!"}
        onClick={handleClick}
      />

      <PrimaryButton
        disableBtn={false}
        text={"JEG HAR CHILDREEEEEEEEEEEEN!"}
        onClick={handleClick}
      >
        <h1>dhldjhføgjdfhøg</h1>
      </PrimaryButton>
    </div>
  );
}

export default App;