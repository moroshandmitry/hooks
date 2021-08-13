import {
  useState,
  useRef,
  useMemo,
  useEffect,
  createContext,
  useCallback
} from "react";
import axios from "axios";
import dotenv from "dotenv";

import { Counter } from "./Counter";
import "./styles.css";

dotenv.config();

export const AppContext = createContext();

export const App = () => {
  const [name, setName] = useState("");
  const [getData, setGetData] = useState(null);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getDataFromServer = async () => {
      const { data } = await axios.get(process.env.URL_API);
      if (data) {
        setGetData(data);
      } else {
        setGetData({ cod: "404", message: `server isn't responding` });
      }
    };
    getDataFromServer();
  }, []);

  const numbers = useMemo(() => [" useMemo ", 1, 2, 3, 4, 5, 6, 7], []);

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const inputRef = useRef();

  const handleFocusInput = () => inputRef.current.focus();

  const handleIncrement = useCallback(
    (value) => {
      setCounter(counter + value);
    },
    [counter]
  );

  console.log(name);
  console.log(counter);

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

        <pre>const todo = {JSON.stringify(getData, null, 2)}</pre>

        <Counter onHandleIncrement={handleIncrement} />
      </div>
    </AppContext.Provider>
  );
};
