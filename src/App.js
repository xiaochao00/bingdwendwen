import logo from './logo.svg';
import './App.css';
import Olympic from './containers/Olympic/index';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
	return (
	<div className="App">
	      <Router>
	        <Routes>
	          <Route element={ <Olympic /> } path="/olympic" />
	        </Routes>
	      </Router>
	    </div>
	);
}

export default App;