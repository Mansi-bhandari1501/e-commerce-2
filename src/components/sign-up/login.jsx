import React ,{useState}from "react";
import Header from "../header";
import { useNavigate } from "react-router-dom";
function Login(){

    const history = useNavigate();
    const [inpval,setInpval] = useState({
        email:"",
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
        const getuserArr = localStorage. getItem("User"); 
        console.log("get array",getuserArr)    ;
        const {email,password} = inpval;

        if(email === ""){
            alert("E-mail field required");
        }
        else if(!email.includes("@")){
            alert("E-mail invalid");
        }
        else if(password === ""){
            alert("Password field required");
        }
        else if(password.length<5){
            alert("weak Password");
        }
        else{
            if(getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr);
                console.log(userdata);
                const userlogin =   userdata.filter((el,k)=>{
                    return el.email === email && el.password ===password;
                });
                if(userlogin.length === 0){
                    alert("invalid details");
                }
                else{ 
                    console.log("user login successfully");
                    history("/frontpage");
                }
            }
        }
    }

    return(
        <>
      
            <div className="container">
                <section>
                    <div className="left-data">
                        <h3>Sign In</h3>
                        <form>
                            <label>
                                <input type="email" name="email" onChange={getdata} placeholder="Enter Email" />
                            </label>
                            <label>
                                <input type="password" name="password" onChange={getdata} placeholder="password" />
                            </label>
                            <input type="submit" onClick={addData} value="Submit" />
                        </form>
                        <p>Already Have an Account <span>Signin</span></p>
                    </div>
                    <div className="right_data">
                        <div className="sign_img">
                            <img src="../sign-up/Rectangle 2.jpg" alt="" />
                        </div>
                    </div>
                </section>
            </div></>
    )
}
export default Login;