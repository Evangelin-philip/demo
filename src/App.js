// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Example from './components/Example';
import { Random } from './components/Random';
import User from './components/User';
import Register from './components/Register';

function App() {
  // JS CODES HERE


  const [ExampleDemo,setExampleDemo]=useState("React Hook")
  const subject="React"
  const UserName="Evangelin"
  
  const style={
    display:"flex",
    justifyContent:"center",
    alignItem:"center",
    width:"100%",
    backgroundColor:"Yellow",
    marginTop:"10px"
  }

  const btn_click=()=>{
    alert("button Clicked !!!!!!!!")
  }

  const user_add=(user)=>{
    alert(`${user} Added !!!!`)
  }

  const get_name=(event)=>{
    // console.log(event)
    // console.log(event.target)
    console.log(event.target.value)
  }
  return (
    // JSX CODES HERE
    <>
          <div style={{textAlign:"center",margin:"20px"}}>
            <Register/>
          </div>



    <h1 style={style}>Hello World</h1>                                                        
    <p style={{textAlign:'center', color:'red'}}> Course : {subject}</p>  
    
    <br />    
    <div style={{display:"flex", justifyContent:"space-around",alignItem:"center",}}> 

      <button onClick={btn_click} style={{padding:'10px',color:"black"}}>CLICK (with_out argument)</button> 
   
      {/* <button onClick={user_add("Joel")} style={{padding:'10px',color:"black"}}>ADD ( with argument)</button>  </div>     unction calling infinite time */}
      <button onClick={()=>user_add("Joel")} style={{padding:'10px',color:"black"}}>ADD ( with argument)</button>  </div>
    <br /> 
    <br />

    <input onChange={(evt)=>get_name(evt)}style={{borderColor:"black"}} type="text" placeholder='Enter user name' />
    <h2>child Components</h2>
    <ol> Functional Component : 
      <li> <Example subject={subject}/></li> 
      <li><User u_name={UserName} age="27"/></li>
    </ol>
    
    
    <ol> Class Component : 
      <li><Random/></li>
    </ol>

<br />
<br /><br />
<h1>React Hooks</h1>
    <p>State value using hook (useState) is <span style={{color:"red"}}>{ExampleDemo}</span></p> 
    </>



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
   
  );
}

export default App;
