import {
  useState,
  useRef,
  useMemo,
  useEffect,
  createContext,
  useCallback
} from "react";
import { Counter } from "./Counter";
import "./styles.css";

export const AppContext = createContext();

export const App = () => {
  const [name, setName] = useState("");
  const [getData, setGetData] = useState(null);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setGetData(json));
  }, []);

  const numbers = useMemo(() => [1, 2, 3, 4, 5, 6, 7], []);

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const inputRef = useRef();

  const handleFocusInput = () => inputRef.current.focus();

  const handleIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  console.log("Render App", name, counter);

  return (
    <AppContext.Provider value={{ counter }}>
      <div className="App">
        <button type="button" onClick={handleFocusInput}>
          useRef focus
        </button>
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={handleChangeName}
        />
        {numbers}
        {/* <div>{Object.values(getData)}</div> */}
        <pre>{JSON.stringify(getData, null, 2)}</pre>
        <Counter onHandleIncrement={handleIncrement} />
      </div>
    </AppContext.Provider>
  );
};
