import { useContext } from "react";
import { AppContext } from "./App";

export const Counter = ({ onHandleIncrement }) => {
  const { counter } = useContext(AppContext);

  console.log("Render Counter");

  return (
    <>
      <button type="button" onClick={onHandleIncrement}>
        Add one
      </button>
      <div>Add number {counter} from context</div>
    </>
  );
};
