import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  function resetCounter() {
    setCount(0);
  }

  function incrementCounter() {
    //this is the more appropriate way of setting a new value to an pre-existing value, not directly

    setCount((oldValue) => oldValue + 1);
  }

  // this is when we don't use inline arrow function, which is not recomended!

  function decrementCounter() {
    setCount(count - 1);
  }

  //OPTION 1 for Event Handling - we directly use return WHEN some condition is met.

  //   if(count < 0) {

  //     return(
  //         <h3>Invalid Count!</h3>
  //     )
  //   }

  //OPTION 2 for Event Handling - IF

  let warning = null;

  if (count < 0) {
    warning = <p>Invalid counter!</p>;
  }

  let message = null;

  switch (count) {
    case 6:
      message = "Half a dozen, well done!";
      break;
    case 10:
      message = "Ten is good!";
      break;
    case 12:
        message = "A dozen is enough, good bye!"
        break;
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <p>{warning}{message}{count == 0 && <p>Please, start incrementing!</p>}</p>
 
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        disabled={count < 0}
      >
        -
      </button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={incrementCounter} disabled={count == 12}>+</button>
    </div>
  );
}
