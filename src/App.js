import logoImg from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <>
          <div className='main'>
              <h1 className='title'>First react app</h1>
              <img src={logoImg} alt="image description"/>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </>
  );
}

export default App;
