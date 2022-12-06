import { useEffect } from "react";
import { IEditComponent } from "../../../Interfaces";

const EditTask = ({ lastValue, taskText, stateText }: IEditComponent) => {
  useEffect(() => {
    stateText(lastValue);
  }, []);

  const editHandle = (e: any) => {
    stateText(e.target.value);

    if (taskText == "") {
      stateText(lastValue);
    } else {
      stateText(e.target.value);
    }
  };

  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
      type="text"
      defaultValue={lastValue}
      onChange={(e) => {
        editHandle(e);
      }}
    />
  );
};
export default EditTask;
