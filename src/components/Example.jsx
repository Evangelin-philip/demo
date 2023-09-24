
import style_sheet from '../myStyle.module.css'
import { useState } from 'react'





function Example({subject}){
    const [topic,settopic]=useState("React Concepts")
    const [user_name,setuser_name]=useState("")

    const change_state_value=(value)=>{
        settopic(value)
    }

//  once submited, alert messag ecomming and the form is getting refreshed so  get the event invoking automatically and prevent it
    // const on_submit=()=>{
    //     alert(`user name: ${user_name}`)
    // }


    const on_submit=(event)=>{
        event.preventDefault()
        alert(`user name: ${user_name}`)
    }
    return(
        <>
        <br /><br /><br />
        <h1 style={{color:"tomato"}}>EXAMPLE COMPONET CONCENTS</h1>
        {/* ----------------------------------------------------CONDITIONAL RENDERING -----------------------------------------in {} */}
       
        {subject==="React" &&
            <p className={style_sheet.headings}>Inside Example Component -   Data sared from App.jsx=------ subject=<span className="sub" style={{color:"#3707e0",fontWeight:"bold"}}>{subject}</span></p>
        }
        {/* -------------------------------------------------------SEE OUTPUT------------------------------------------------------------------ */}
         {/* -----------------------go to App .jsx and change subject value to something and try------------------------------------------ */}

        <h2> React hooks in functional components --useState</h2>
        <p>current state value :  <span style={{color:"blue",fontSize:"12px",fontWeight:"bold"}}>{topic}</span></p>

         <button onClick={()=>change_state_value("React Hooks")} style={{padding:'10px',color:"black"}}>CLICK To Chnage State value</button> 
         <br /><br /><br />

         <h2> FORM</h2>
         <div style={{backgroundColor:"yellow",padding:"20px"}}>
            <form onSubmit={on_submit}>
                <label htmlFor="user_name">User Name
                    <input style={{margin:"10px"}} type="text" id="user_name" placeholder='Enter user name' 
                    value={user_name || ""} onChange={(event)=>setuser_name(event.target.value)} />
                </label>
                <input style={{margin:"10px"}} type="submit" value="submit" />
            </form>
         </div>
        </>
    )
}
export default Example