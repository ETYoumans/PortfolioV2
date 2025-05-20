import './App.css';
import Cartridge from './Cartridge';
import SudokuColoring from './imgs/sudoku.png'

function App() {
  return (
    <div className="App">
      <Cartridge 
        image = {SudokuColoring}
        link = ''
      />
    </div>
  );
}

export default App;
