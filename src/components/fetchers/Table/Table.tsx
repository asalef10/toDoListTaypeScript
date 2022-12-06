import { FC, useState } from "react";
import { ITask } from "../../../Interfaces";
import { useGlobalContext } from "../../../useContext/Context";
import AddTask from "../addTask/AddTask";
import ButtonsHandle from "../editTask/ButtonsHandle";
import EditTask from "../editTask/EditTask";
const Table: FC = () => {
  const {
    dataTasks,
    isAdd,
    setIsAdd,
    TaskNameEdit,
    setTaskNameEdit,
    TaskLevelEdit,
    setTaskLevelEdit,
    toDoEditId,
    updateStatus,
  } = useGlobalContext();
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="rounded-full outline outline-offset-2 outline-1 text-center"
        placeholder="Search"
      ></input>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Description
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Priority level
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Status
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Time
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Edit/Delete Task
            </th>
          </tr>
        </thead>
        <tbody>
          {dataTasks
            .filter((value:ITask) => {
              if (
                value.taskName
                  ?.toLowerCase()
                  .includes(search.toLowerCase().trim())
              ) {
                return value;
              }
            })
            .map((item: ITask, i: Number) => {
              return (
                <>
                  <tr key={item.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {toDoEditId != item.id ? (
                        item.taskName
                      ) : (
                        <EditTask
                          lastValue={item.taskName}
                          stateText={setTaskNameEdit}
                          taskText={TaskNameEdit}
                        />
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {toDoEditId != item.id ? (
                        item.level
                      ) : (
                        <EditTask
                          lastValue={item.level}
                          stateText={setTaskLevelEdit}
                          taskText={TaskLevelEdit}
                        />
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <input
                        onChange={() => {
                          updateStatus(item.id, item.status);
                        }}
                        type="checkbox"
                        name="vehicle1"
                        value="isDone"
                        checked={item.status}
                      />
                      <label> Done</label>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {item.time}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <ButtonsHandle id={item.id} removeIndex={i} />
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      &nbsp; &nbsp; &nbsp;
      {isAdd ? (
        <div className="flex justify-center ">
          <AddTask />
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setIsAdd((prev: boolean) => !prev);
            }}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Add Task
          </button>
        </div>
      )}
    </>
  );
};
export default Table;
