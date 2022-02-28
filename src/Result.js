import { useEffect, useState } from "react";

const Result = () => {
  const [count, setCount] = useState(0);

  const [startCount, setStartCount] = useState(false);

  // const updateCount = () => setCount((prevCount) => prevCount + 1);

  useEffect(() => {
    let hello;
    if (startCount) {
      hello = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(hello);
    };
  }, [startCount]);

  return (
    <>
      <div className='result-board'>
        <h2>Number: {count}</h2>
      </div>
      <div className='buttons'>
        <button onClick={() => setStartCount(true)} className='start'>
          START
        </button>
        <button className='stop' onClick={() => setStartCount(false)}>
          STOP
        </button>
      </div>
    </>
  );
};

export default Result;
