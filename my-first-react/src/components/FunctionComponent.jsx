import React,{ useState } from "react";

const FunctionComponent = (props) => { 
    // const FunctionComponent = ({name, age, author, setName}) => { curly braces are used to access internally defined parameters
        const [count, setCount] = useState(0);
        const [changedName, setChangeName]= useState(""); //curlybraces needed?
        const reduceCount = () => { setCount(count-1)}

    return(
        <div>
            <p>This is a Functional Component</p>
            <button onClick={()=>setCount(count+1)}> Click me to Increment</button>
            <button onClick={reduceCount}>Click here to Decrement</button>
            <h2>{count}</h2>

            <h4>my name is {props.name} and i am {props.age} years old.</h4>
            {/* <h4>tge name of the book is {setName} and it's written by {author}.</h4> */}
            <h4>the name of the book is {props.bkName} and it's written by {props.author}.</h4>

            <input onChange={(e)=> setChangeName(e.target.value)}/>
            {/* <button onClick={props.setName(changedName)}> </button>  this is wrong coz set name is only given but not defined in the states */}

           <button onClick={()=> props.setName(changedName)}>Change my Name</button> 
           <button onClick={()=> props.setBkName(changedName)}>Change book Name</button>
        </div>
    );
}

export default FunctionComponent;