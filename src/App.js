import "./styles.css";

import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const resultCalc = (value) => {
    setCalc(calc + value);

    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    if (!ops.includes(value)) {
      setResult(eval(calc + value));
    }
  };
  const resetCalc = () => {
    setCalc({ reset });
  };

  const createNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => resultCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numbers;
  };

  const equal = () => {
    setCalc(eval(calc).toString());
  };

  const deleteCalc = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };
  function reset() {
    setResult(0);
    setCalc("");
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {calc || "0"}

          <div className="result">{result ? <span>({result})</span> : ""}</div>
        </div>

        <div className="operators">
          <button onClick={() => resultCalc("+")}>+</button>
          <button onClick={() => resultCalc("-")}>-</button>
          <button onClick={() => resultCalc("*")}>*</button>
          <button onClick={() => resultCalc("/")}>/</button>
          <button onClick={deleteCalc}>DEL</button>
        </div>

        <div className="digitals">{createNumbers()}</div>

        <div className="regulators">
          <button onClick={equal}>=</button>
          <button onClick={() => resultCalc(".")}>.</button>
          <button onClick={() => resultCalc("0")}>0</button>
          <button onClick={reset}> AC</button>
        </div>
      </div>
    </div>
  );
}

export default App;
