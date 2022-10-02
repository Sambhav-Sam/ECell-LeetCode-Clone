import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contest from './components/Contest';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
        <Header />
        <Home />
        <Footer />
        </Route>
          <Route exact path="/contest">
        <Header />
        <Contest>
          <img src="/images/air.png" alt="" />
          <img src="/images/aire.png" alt="" />
        </Contest>
        {/* <Footer /> */}
        </Route>
      </Switch>
      </Router>
    </div>
  );
};

export default App;
