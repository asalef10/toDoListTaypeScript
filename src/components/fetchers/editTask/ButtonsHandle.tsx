import { ITask } from "../../../Interfaces";
import { useGlobalContext } from "../../../useContext/Context";
const ButtonsHandle  = ({ id, removeIndex }: ITask) => {

  const { editTask, setIsSave, deleteTask, setToDoEditId, toDoEditId } =
    useGlobalContext();
  const editHandle = () => {
    setToDoEditId(id);
    setIsSave((prev: boolean) => !prev);
  };
  return (
    <div className="flex">
      {toDoEditId === id ? (
        <button
          onClick={() => {
            editTask(id);
          }}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          {"Save"}
        </button>
      ) : (
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            editHandle();
          }}
        >
          Edit
        </button>
      )}
      &nbsp;{" "}
      <button
        onClick={() => {
          deleteTask(removeIndex);
        }}
        className="bg-red-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Delete
      </button>{" "}
    </div>
  );
};
export default ButtonsHandle;
