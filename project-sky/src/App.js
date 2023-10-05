

import Navbar from './Navbar';
import Home from './Home';

function App() {
  const free = "I feel so free";
  const sol = "I'm Learning react so fast";
  const gog = "www.has.com";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* <h1>Awesome + {free} {sol} </h1>
        <a href={sol}>hasan</a> */}
      </div>
    </div>
  );
}

export default App;
