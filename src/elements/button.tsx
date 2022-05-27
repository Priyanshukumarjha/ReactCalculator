const Buttons = (props: button) => {
  return (
    <button className={props.classvalue} onClick={props.event}>
      {props.sign}
    </button>
  );
};

interface button {
  sign: any;
  event: any;
  classvalue?: string;
}

export default Buttons;
