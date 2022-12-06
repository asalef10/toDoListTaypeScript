
import { FC } from "react";
import { useGlobalContext } from "../../../useContext/Context";

const AddTask:FC = () => {
  const { addNewTask, informationFilling } = useGlobalContext();
  return (
    <form className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Task Description
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            onChange={(e) => {
              informationFilling(e);
            }}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="taskDescription"
            type="text"
            placeholder="Go To Run"
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Level
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            onChange={(e) => {
              informationFilling(e);
            }}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="taskLevel"
            type="text"
            placeholder="Low"
            required
          />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3 flex justify-center">

        <div className="md:w-2/3">
          <button
            onClick={addNewTask}
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Add To List
          </button>
            </div>
        </div>
      </div>
    </form>
  );
};
export default AddTask;
