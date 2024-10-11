import {render, screen} from '@testing-library/react';
import App from './App';
import TaskBoard from './components/UI/TaskBoard';

// Simulez les données JSON pour le test
const mockData = [
  {TODO: 'Test task 1', status: 'En cours'},
  {TODO: 'Test task 2', status: 'Terminée'},
];

// Mock du composant TaskBoard
jest.mock('./components/UI/TaskBoard', () => {
  return function MockTaskBoard() {
    return (
      <div>
        <h1>Liste des Tâches</h1>
        {mockData.map((task, index) => (
          <div key={index}>
            <p>
              {task.TODO} - {task.status}
            </p>
          </div>
        ))}
      </div>
    );
  };
});

test('renders App with TaskBoard', () => {
  render(<App />);
  const headerElement = screen.getByText(/liste des tâches/i);
  expect(headerElement).toBeInTheDocument();

  // Vérifiez que les tâches simulées sont affichées
  mockData.forEach(task => {
    const taskElement = screen.getByText(new RegExp(task.TODO, 'i'));
    expect(taskElement).toBeInTheDocument();
  });
});
