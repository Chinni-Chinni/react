
import './App.css';
import Count from './components/Count';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1><u>Count</u></h1>
      <Count />
      <br />
      <h1><u>TodoList</u></h1>
      <TodoList />

    </div>
  );
}

export default App;
