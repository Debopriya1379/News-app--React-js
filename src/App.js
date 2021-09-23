import Navbar from './components/Navbar';
import News from './components/News';
import {React,useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


function App() {

  const API_key = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar/>
        <LoadingBar
        height={5}
        color='#f11946'
        progress={progress} 
      />
        {/* <h2 className="text-center bg-primary p-2">Today's Latest News</h2> */}
        {/* <News pageSize={18}/> */}
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} Api_key={API_key} pageSize={9} category="general" key="general"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} Api_key={API_key} pageSize={9} category="health" key="health"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} Api_key={API_key} pageSize={9} category="business" key="business"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} Api_key={API_key} pageSize={9} category="sports" key="sports"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} Api_key={API_key} pageSize={9} category="science" key="science"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} Api_key={API_key} pageSize={9} category="technology" key="technology"/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;