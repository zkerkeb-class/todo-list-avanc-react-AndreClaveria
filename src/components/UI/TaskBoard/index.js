import React, {useState, useMemo} from 'react';
import styles from './index.module.scss';
import TaskAdd from '../TaskAdd';
import useTasks from '../../../hooks/useTasks'; // Assurez-vous que le chemin est correct

const TaskBoard = () => {
  const {tasks, addTask, deleteTask, toggleTaskStatus} = useTasks();
  const [filter, setFilter] = useState('all');

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.status === 'Terminée');
      case 'incomplete':
        return tasks.filter(task => task.status === 'En cours');
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div className={styles.taskBoard}>
      <h1>Liste des Tâches</h1>
      <TaskAdd onAdd={addTask} />

      <div className={styles.filter}>
        <button className="btn btn__primary" onClick={() => setFilter('all')}>
          Toutes
        </button>
        <button
          className="btn btn__primary"
          onClick={() => setFilter('completed')}>
          Terminées
        </button>
        <button
          className="btn btn__primary"
          onClick={() => setFilter('incomplete')}>
          Non terminées
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={task.status === 'Terminée'}
                  onChange={() => toggleTaskStatus(index)}
                />
              </td>
              <td>{task.TODO}</td>
              <td>
                <label>{task.status}</label>
              </td>
              <td>
                <button
                  className="btn btn__secondary"
                  onClick={() => deleteTask(index)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskBoard;
