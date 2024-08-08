import Greet from './component/Greet.js';
import Xyz from './component/Xyz.js';
import State from './component/State.js';
import Propseg from './component/Props.js';
import Props from './component/Props1.js';
import Jsx1 from './component/Jsx1.js';
import Jsx2 from './component/Jsx2.js';
import Jsx3 from './component/Jsx3.js';
import Jsx4 from './component/Jsx4.js';
import Jsx5 from './component/Jsx5.js';
import Hookusesatte from './component/Hookusesatte.js';
import Hookuseeffect from './component/Hookuseeffect.js';
import Hookusememo from './component/Hookusememo.js';

function App() {
  const data ={name : "classes"};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
        <Greet />
        <Xyz />
        <State />
        <Propseg name ="Profound edutech" />
        <Props indata ={data}/>
        <Jsx1 />
        <Jsx2 />
        <Jsx3 />
        <Jsx4 />
        <Jsx5 />
        <Hookusesatte />
        <Hookuseeffect />
        <Hookusememo />
      </header>
    </div>
  );
}

export default App;



