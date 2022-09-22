import React from 'react';
import './App.css';
// import Counter from './components/Counter';
import Counter2 from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1> Header 1 </h1>
        {/* <Counter 
        counter={20}/> */}
        <Counter2 counter={3}/>
    </div>
  );
}

export default App;
