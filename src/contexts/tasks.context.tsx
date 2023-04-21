import { ReactNode, createContext, useContext, useState } from "react";
import { Task } from "../types/task";
import { Api } from "../api/axios";
import { ApiPaths } from "../types/api.paths";

interface ITaskContextProvider {
  myTasks: Task[];
  getMyTasks: () => Promise<void>;
}

const TaskContext = createContext<ITaskContextProvider>(
  {} as ITaskContextProvider
);

interface ITaskContextProviderProps {
  children: ReactNode;
}

const TaskContextProvider = (props: ITaskContextProviderProps) => {
  const [myTasks, setMyTasks] = useState<Task[]>([]);

  const getMyTasks = async () => {
    Api.get(ApiPaths.GET_MY_TASKS).then(({ data }) => {
      setMyTasks(data);
    });
  };

  return (
    <TaskContext.Provider value={{ myTasks, getMyTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
};

const useTasks = () => useContext(TaskContext);

export { TaskContextProvider, useTasks };
