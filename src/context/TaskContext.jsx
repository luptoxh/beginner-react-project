import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]); //Copia todos los elementos de "task" y añade una task nueva
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []); //Cuando el componente "TaskContextProvider" es creado el useEffect se va a ejecutar. Y va a establecer en las tareas los datos.

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
