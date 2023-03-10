 const TimeCounter = (props) => {
  const category = props.title.toLowerCase();
  return (
    <>
      <h2 id={`${category}-label`}>{props.title} Length</h2>
      <div >
        <button id={`${category}-decrement`}  onClick={props.handleDecrease}>
          -
        </button>
        <span id={`${category}-length`}>{props.count}</span>
        <button id={`${category}-increment`}  onClick={props.handleIncrease}>
          +
        </button>
      </div>
    </>
  );
};

export default TimeCounter;