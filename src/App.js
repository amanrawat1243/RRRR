import logo from './logo.svg';
import './App.css';
import Vavbar from './components/Vavbar';
import TextForm from './components/TextForm';
import About from './components/About.js';

function App() {
  return (
    <>
    


  <Vavbar title="Poject"/>

        <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
        <About/>
        </div>

             
    </>
  );
}

export default App;
