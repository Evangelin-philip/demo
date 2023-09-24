import React from "react";


export class Random extends React.Component{
    constructor(){
        super()
        this.state={course:"MERN"}
    }

    change_state_value=()=>{
        this.setState({course:"MEAN"})
    }

    render(){
        return(
            <>
                <p>Inside Random Component---The random state value ={this.state.course}</p>
                {/* //  To change the state value from mERN to MEAN on clicking btn */}
                <button onClick={this.change_state_value} style={{padding:'10px',color:"black"}}>Change State Value</button> 
                {/* while clicking the btn, MERN chnage to MEAN */}
            </>
        )
    }
}