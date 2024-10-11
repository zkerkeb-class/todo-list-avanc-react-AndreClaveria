import TaskBoard from './components/UI/TaskBoard';
import jsonData from './data/task.json';

import './assets/css/global.scss';
function App() {
  return (
    <div>
      <header>
        <TaskBoard data={jsonData} />
      </header>
    </div>
  );
}

export default App;
