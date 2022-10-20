const PrimaryButton = (props: any) => {
  const {disableBtn, text} = props;

  // console.log(props);

  return (
    <button
      onClick={props.onClick}
      disabled={disableBtn}
    >
      {text}
      {props.children}
    </button>
  );
}

export default PrimaryButton;