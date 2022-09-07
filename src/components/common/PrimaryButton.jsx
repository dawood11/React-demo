const PrimaryButton = (props) => {
  const {disableBtn, text} = props;

  console.log(props);

  return (
    <button
      style={{ backgroundColor: 'red'}}
      onClick={props.onClick}
      disabled={disableBtn}
    >
      {text}
      {props.children}
    </button>
  );
}

export default PrimaryButton;