import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { NavLink } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setdata] = useState([]);
  const getdata = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    // const value = e.target.value;
    // console.log(value,name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
    // console.log(inpval);
  };
  const addData = (e) => {
    e.preventDefault();
    const getuserArr = localStorage.getItem("User");
    console.log("get array", getuserArr);
    const { email, password } = inpval;

    if (email === "") {
      alert("E-mail field required");
    } else if (!email.includes("@")) {
      alert("E-mail invalid");
    } else if (password === "") {
      alert("Password field required");
    } else if (password.length < 5) {
      alert("weak Password");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        console.log(userdata);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login successfully");
          history("/");
        }
      }
    }
  };

  return (
    <>
      <div className="signup-page">
        <svg
          className="left-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
            fill="black"
          />
        </svg>
        <section className="signin-container">
          <div className="signup-data">
            <h3 className="signup-heading">Log In</h3>
            <form>
              <p>
                New User?
                <span>
                  <NavLink to="/signup"> Sign-up</NavLink>
                </span>
              </p>
              <label>
                <input
                  className="inputemail"
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter Email"
                />
              </label>
              <label>
                <input
                  className="input-password"
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="password"
                />
              </label>
              <input
                className="input-submit"
                type="submit"
                onClick={addData}
                value="Submit"
              />
            </form>
          </div>
        </section>
        <svg
          className="right-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
        >
          <path
            d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
            fill="black"
          />
        </svg>
      </div>
    </>
  );
}
export default Login;
