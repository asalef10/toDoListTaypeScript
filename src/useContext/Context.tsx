import { useWeb3React } from "@web3-react/core";
import React, { createContext, FC, useContext, useState } from "react";
import { ITask, Props } from "../Interfaces";
export const MyContext = createContext({});
export const MyProvider = MyContext.Provider;

const UseContext = ({ children }: Props) => {
  const { account } = useWeb3React();
  const [TaskNameEdit, setTaskNameEdit] = useState<string>("");
  const [TaskLevelEdit, setTaskLevelEdit] = useState<string>("");
  const [toDoEditId, setToDoEditId] = useState<number | null>(null);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isSave, setIsSave] = useState<boolean>(false);
  const [dataTasks, setDataTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState<ITask>({
    id: 0,
    taskName: "",
    level: "",
    time: 0,
    status: false,
  });
  const informationFilling = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.id === "taskDescription") {
      setNewTask({
        ...newTask,
        id: Date.now(),
        taskName: e.target.value,
        time: new Date().toLocaleDateString("he-il"),
      });
    } else if (e.target.id === "taskLevel") {
      setNewTask({ ...newTask, level: e.target.value });
    }
  };
  const addNewTask = (): void => {
    if (newTask.taskName !== "" && newTask.level) {
      setDataTasks((oldArray) => [...oldArray, newTask]);
      setIsAdd((prev) => !prev);
    } else {
      alert("Filling input ");
    }
    try {
      let Time: number | string | undefined = newTask.time;

      let chartDetails = JSON.parse(
        localStorage.getItem(`${account}_chartDetails`) || "{}"
      );
      const details = chartDetails || {};
      if (!details[Time as number]) {
        chartDetails = { ...details, [Time as number]: 0 };
        localStorage.setItem(
          `${account}_chartDetails`,
          JSON.stringify(chartDetails)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const editTask = (id: Number): void => {
    setDataTasks((task) =>
      task.map((obj: any) => {
        if (obj.id === id) {
          setTaskNameEdit(obj.taskName);
          setTaskLevelEdit(obj.level);
          return {
            ...obj,
            taskName: TaskNameEdit,
            level: TaskLevelEdit,
          };
        }
        return obj;
      })
    );

    setToDoEditId(null);
    setIsSave((prev) => !prev);
  };
  const deleteTask = (removeIndex: number): void => {
    setDataTasks((oldArray) => {
      return oldArray.filter((value, i) => i !== removeIndex);
    });
    console.log(dataTasks);
  };
  const updateStatus = (id: Number, status: Boolean): void => {
    try {
      let statusHandle;
      let chartDetails = JSON.parse(
        localStorage.getItem(`${account}_chartDetails`) || "{}"
      );

      setDataTasks((task): any =>
        task.map((obj: any) => {
          if (obj.id === id) {
            let itemCount = chartDetails[obj.time];
            if (status) {
              statusHandle = false;
              itemCount--;
            } else {
              statusHandle = true;
              itemCount++;
            }
            chartDetails[obj.time] = itemCount;
            localStorage.setItem(
              `${account}_chartDetails`,
              JSON.stringify(chartDetails)
            );
            return {
              ...obj,
              status: statusHandle,
            };
          }
          return obj;
        })
      );
    } catch (err) {
      localStorage.setItem(`${account}_chartDetails`, JSON.stringify([]));

      console.log(err);
    }
  };
  const values = {
    dataTasks,
    setDataTasks,
    newTask,
    setNewTask,
    addNewTask,
    informationFilling,
    isAdd,
    setIsAdd,
    editTask,
    TaskNameEdit,
    setTaskNameEdit,
    TaskLevelEdit,
    setTaskLevelEdit,
    isSave,
    setIsSave,
    deleteTask,
    toDoEditId,
    setToDoEditId,
    updateStatus,
  };
  return <MyProvider value={values}>{children}</MyProvider>;
};
export const useGlobalContext: any = () => {
  return useContext(MyContext);
};
export default UseContext;
