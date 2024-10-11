import {useState, useEffect} from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (Array.isArray(savedTasks)) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = taskText => {
    const newTask = {TODO: taskText, status: 'En cours'};
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];

      return updatedTasks;
    });
  };

  const deleteTask = index => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);

      return updatedTasks;
    });
  };

  const toggleTaskStatus = index => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index
          ? {
              ...task,
              status: task.status === 'En cours' ? 'Terminée' : 'En cours',
            }
          : task,
      ),
    );
  };

  return {tasks, addTask, deleteTask, toggleTaskStatus};
};

export default useTasks;
