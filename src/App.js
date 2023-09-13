import './App.css';
import Dropdown from './components/Dropdown';
//Storing data as items
function App() {
  const items = ["Yes", 'Probably Not'];
  return (
    <div className="App">
  {/* passing data as props in Dropdown components */}
      <Dropdown items={items} />
    </div >
  );
}

export default App;
