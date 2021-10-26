import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import MenuDepartamentos from "../Departamentos/MenuDepartamentos";
import TablaDepartamentos from "../Departamentos/TablaDepartamentos";
import Router from "../Router";


function App() {
  return (
    <div className="App">

      <Router />
    </div>
  );
}

export default App;
