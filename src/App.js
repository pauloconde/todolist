import './App.css';
import Logo from './components/Logo';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='todo-list'>
        <h1>to do list</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
