import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        {/* <h2 className="text-center bg-primary p-2">Today's Latest News</h2> */}
        {/* <News pageSize={18}/> */}
        <Switch>
          <Route exact path="/"><News pageSize={9} category="general" key="general"/></Route>
          <Route exact path="/health"><News pageSize={9} category="health" key="health"/></Route>
          <Route exact path="/business"><News pageSize={9} category="business" key="business"/></Route>
          <Route exact path="/sports"><News pageSize={9} category="sports" key="sports"/></Route>
          <Route exact path="/science"><News pageSize={9} category="science" key="science"/></Route>
          <Route exact path="/technology"><News pageSize={9} category="technology" key="technology"/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;