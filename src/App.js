import React from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import MeasurementConverter from './pages/MeasurementConverter'
import FractionalCalculator from './pages/FractionalCalculator'
import ReferenceManual from './pages/ReferenceManual'

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={MeasurementConverter} />
            <Route path='/MeasurementConverter' component={MeasurementConverter} />
            <Route path='/FractionalCalculator' component={FractionalCalculator} />
            <Route path='/ReferenceManual' component={ReferenceManual} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
