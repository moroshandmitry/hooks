import { useContext } from "react";
import { AppContext } from "./App";

export const Counter = ({ onHandleIncrement }) => {
  const { counter } = useContext(AppContext);

  return (
    <>
      <button type="button" onClick={() => onHandleIncrement(5)}>
        {counter ? "" : "Start"} Add Five
      </button>
      <div>
        {counter
          ? `Add five ${counter} from context`
          : "Please press on button and counter will be here..."}
      </div>
    </>
  );
};
