import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  const author = "Husain";

  const [name, setName] = useState("Amjad");
  const [bkName, setBkName] =useState("Life of a Spy");

  return (
    <div className="App">
     
       <p>Hey Welcome to the React Session</p>
      
      <h1>Class Component</h1>
      <ClassComponent/>


    <h1>This is Function Component</h1>
    <FunctionComponent name={name} age={23} author={author} setName= {setName} bkName={bkName} setBkName={setBkName} />  {/*these are props */}
    </div>
  );
}

export default App;
