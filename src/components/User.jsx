import React from 'react';
import './User.css';
import { useState } from 'react';

function User(props) {
    const [color,setcolor]=useState({
        first:"red",
        second:"green",
        third:"blue"
    })

    
    console.log(props);


    const change_color_obj=(new_color)=>{
        // setcolor({second:new_color})-------------------------------only show the second color in console instaed use
        setcolor({...color,second:new_color})
        console.log(color)
    }


    const userArray=[
        {username:"eva",age:27},
        {username:"annie",age:55},
        {username:"george",age:58},
        {username:"joel",age:37},
        {username:"poppy",age:22},
    ]
  return (
    
     <>
     <br /><br /><br />
     <h1 style={{color:"chartreuse"}}>USER COMPONENT CONTENTS</h1>
         {props.u_name==="Evangelin"?
            <div>
                <p>Inside User Component: The parent data shared is --Name =<span className='user_name'>'{props.u_name}' </span>          Age={props.age}</p>
                <button onClick={()=>change_color_obj("yellow")} style={{padding:'10px',color:"black"}}>Change State Value of the object</button> 
            </div>
            
            :<p>user incorrect</p>
         }
         <br /><br /><br />
         <h2 style={{backgroundColor:"yellow"}}>USER DETAILS FROM ARRAY OF OBJECTS</h2>
         <table>
            <thead>
                <tr>
                    <th>sl no.</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>            
            </thead>
            <tbody>
                {
                    // userArray.map((item,index)=>{------------------------if giving curly barcket at end it will consider as js code and td,tr are not js and wont show result, or give ()
                    userArray.map((item,index)=>(
                        <tr>
                           <td>{index+1}</td>
                           <td>{item.username}</td>
                           <td>{item.age}</td>
                        </tr> 

                    ))
                }
            </tbody>
         </table>

         <br /><br /><br />
     </>
   
  )
}

export default User
