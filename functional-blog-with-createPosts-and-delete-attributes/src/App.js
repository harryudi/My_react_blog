

import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import ErrorPage from './ErrorPage';


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path= "/">
            <Home />
          </Route>
          <Route path= "/create">
            <Create />
          </Route>
          <Route path= "/blogs/:id">
            <BlogDetails />
          </Route>
          <ErrorPage path="*"/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
