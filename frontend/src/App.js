import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';

function App() {
  return (
    <div class="bg-gradient-to-r from-green-200 to-blue-200 ... ">
      <Header />
      <Calculator />
      <button className="btn btn-outline btn-primary">Button</button>
    </div>
  );
}

export default App;
