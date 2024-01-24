import React,{useState} from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
// import Header from "../header";
// import image1 from "../sign-up/Rectangle 2.jpg"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


function Signup() {
    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        date:"",
        password:""
    })

    const [data,setdata]= useState([])
    const getdata=(e)=>{
        // console.log(e.target.value);
        const {value,name}= e.target;
        // const value = e.target.value;
        // console.log(value,name);
        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
        // console.log(inpval);

    }
    const addData=(e)=>{
        e.preventDefault();
        console.log(inpval);
        const {name,email,date,password} = inpval;

        if(name === ""){
            alert("Name field required");
        }
        else if(email === ""){
            alert("E-mail field required");
        }
        else if(!email.includes("@")){
            alert("E-mail invalid");
        }
        else if(date === ""){
            alert("Date field required");
        }
        else if(password === ""){
            alert("Password field required");
        }
        else if(password.length<5){
            alert("weak Password");
        }
        else{
            console.log("data added successfully");
            localStorage.setItem("User",JSON.stringify([...data,inpval]));
            alert("Successfully sign-up");
        }
    }


    return (
        <>
          
            <div className="container mt-5">
                <section>
                    <div className="left-data">
                        <h3>Sign Up</h3>
                        <form>
                            <label>
                                <input type="text" name="name"  onChange={getdata} placeholder="Enter name" />
                            </label>
                            <label>
                                <input type="email" name="email" onChange={getdata} placeholder="Enter Email" />
                            </label>
                            <label>
                                <input type="date" name="date" onChange={getdata} placeholder="DOB"/>
                            </label>
                            <label>
                                <input type="password" name="password" onChange={getdata} placeholder="password" />
                            </label>
                            <input type="submit" onClick={addData} value="Submit" />
                            {/* <Button className="btn" variant="contained">submit</Button> */}

                        </form>
                        <p>Already Have an Account <span><NavLink to="/login">Signin</NavLink></span></p>
                    </div>
                    <div className="right_data">
                        <div className="sign_img">
                            <img src="../sign-up/Rectangle 2.jpg" alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Signup;