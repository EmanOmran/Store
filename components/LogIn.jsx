import React, { useState } from 'react';
import axios from 'axios';



import '../style/LogIn.css';
import { Button, Snackbar} from '@mui/material';



function LogIn() {
  const [userName,setusername]=useState('')
  const [password,setpassword]=useState('')
  const first = async() => {
    const url_api = "https://fci-back-end.herokuapp.com/login";
    try {
      const response=await axios.post(url_api,{userName:userName,password:password})
      setopen(true)
      console.log(response)
    } catch (error) {
      setright(true)
    }
  };
  const [open,setopen]=useState(false)
  const [right,setright]=useState(false)
  const handleusername=(e)=>{
    setusername(e.target.value)
  }
  const handlepassword=(e)=>{
    setpassword(e.target.value)
  }
  const handleclose =(event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setopen(false)
    setright(false)
  }
        return(

<div className="signupFrm mt-5">
        <form action="" class="form">
        <Snackbar message="sucessful login" autoHideDuration={5000} open={open}
        onClose={handleclose}   anchorOrigin={{ vertical:'top', horizontal:'right' }}
        >
        </Snackbar>
        <Snackbar message="there is error in login" autoHideDuration={5000} open={right}
        onClose={handleclose}   anchorOrigin={{ vertical:'top', horizontal:'right' }}
        >
        </Snackbar>
        
      <h1 className="title">Log In</h1>
    <div class="input-group mb-3">
    <button class="btn btn-outline-secondary" type="button" id="button-addon1" >Uesr Name</button>
        <input type="text" class="form-control" placeholder="Enter Your Uesr Name"  aria-describedby="button-addon1" onChange={handleusername}/>
    </div>
    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" id="button-addon1" >Password</button>
        <input type="text" class="form-control" placeholder="Enter Your Password"  aria-describedby="button-addon1" onChange={handlepassword}/>
    </div>
          <div className="sub">
      <Button variant="contained" onClick={first}>login</Button>
      </div>
    </form> 
        
  </div>

        )
    }

export default LogIn;