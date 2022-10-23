import { PrimaryButtonPropType } from './PrimaryButton.types';

const PrimaryButton = (props: PrimaryButtonPropType) => {
  const {disableBtn, text} = props;

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