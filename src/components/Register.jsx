import React, { useState } from 'react'

function Register() {

// ---------------------------------State is an object as the form details have multiple entries like, uname, gender adnd course----------------
    const [studentDetails,setstudentDetails]=useState({
        uname:"",
        email:"",
        gender:"",
        course:""
    })

    const get_Details=(evt)=>{
        // console.log(evt)
        // Destructuring e.target to object containing two values, name and value
        const {name,value}=evt.target
        // updating state
        // why name in [] is that i want the item in name variable ie uname which is the key
        setstudentDetails({...studentDetails,[name]:value})


        // if giving console in the function, the console gives untill previous chnagee
        // console.log(studentDetails);
    }
    // if giving console in outside function, the console gives current chanages
    console.log(studentDetails);



    const submit=(evt)=>{
        evt.preventDefault()
        alert(
            `
            ----------STUDENT DETAILS SUBMITED SuCESSFULLY-----------



            Name    :      ${studentDetails.uname} 
            E mail  :      ${studentDetails.email} 
            Gender  :      ${studentDetails.gender} 
            Course  :      ${studentDetails.course} 


            
            ------------------------------------------------
            `
        )
    }

  return (
    <div>
      <h1>Student Registration Form</h1>
      <form style={{border:"1px solid",borderRadius:"5px",backgroundColor:"#d6d6c2", marginTop:"20px"}}
        // while clicking submit btn,,, so btn typw should be "Submit nad inside fform tag" 
        onSubmit={submit}>


        {/* -------------------------------------------user input ----------------------------------------------- */}
        <div style={{marginTop:"20px"}}>
            <label  htmlFor="user_name">User Name
                <input type="text" id="user_name" placeholder='Please Enter username' 
                // -----------------name attribute to identify in get details funtion  from which text box data is coming---------------
                name ="uname" onChange={(event)=>get_Details(event)}
                //To make controlled form , keep value attribute with state value or "" and dont keep value as NONE
                value={studentDetails.uname || ""}
                />
            </label>
        </div>

        {/* --------------------------------------------email input---------------------------------------------------- */}
        <div style={{marginTop:"20px"}}>
            <label  htmlFor="e_mail">User Name
                <input type="email" id="e_mail" placeholder='Please Enter Email Id' 
                // -----------------name attribute to identify in get details funtion  from which text box data is coming---------------
                name ="email" onChange={(event)=>get_Details(event)}
                //To make controlled form , keep value attribute with state value or "" and dont keep value as NONE
                value={studentDetails.email || ""}
                />
            </label>
        </div>


         {/* -------------------------------------------gender input ----------------------------------------------- */}
        <div style={{marginTop:"20px"}}>
            <label style={{marginRight:"5px"}} htmlFor="gender">Gender :</label>
            <label style={{marginLeft:"10px"}} htmlFor="male">
                {/*  name = gender allow only to select one radio option */}
                <input  type="radio" name="gender" id="male" 
                //  giving value attribute to get  the value to update state
                //  also we can give hard coded value, as radio button of male value will be "MALE" and female radio selected value wll be "FEMALE"
                value={"Male"} onChange={(event)=>get_Details(event)}
                />Male
            </label>
            <label style={{marginLeft:"10px"}} htmlFor="female">
                {/*  name = gender allow only to select one radio option */}
                <input  type="radio" name="gender" id="female" 
                value={"Female"} onChange={(event)=>get_Details(event)}
                />Female
            </label>
        </div>

         {/* -------------------------------------------course input ----------------------------------------------- */}
        <div style={{marginTop:"20px"}}>
            <label htmlFor="course">Course :</label>
            <select id="course"
            // when selecting we get value rom select tag so name attribute and onChange in select tag
            name="course" onChange={(event)=>get_Details(event)} 
            >
                <option disabled hidden selected>Choose Course</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
            </select>
        </div>

         {/* -------------------------------------------submit ----------------------------------------------- */}
        <input style={{marginTop:"20px",marginBottom:"20px"}} type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default Register
