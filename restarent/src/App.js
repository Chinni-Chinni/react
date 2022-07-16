import data from "./data.json";
import './App.css';
import RestarentDetails from "./RestarentDetails/RestarentDetails";

function App() {
  return (
    <div className="App">
      {
        data.map((item) => (
          <RestarentDetails key={item.id} data={item} />
          ))
      }
      
    </div>
  );
}

export default App;
