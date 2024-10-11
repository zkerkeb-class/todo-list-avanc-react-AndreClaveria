import React, {useState} from 'react';
import styles from './index.module.scss';

const TaskAdd = ({onAdd}) => {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (task) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={task}
        onChange={e => setTask(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className="btn btn__primary">
        Ajouter
      </button>
    </form>
  );
};

export default TaskAdd;
