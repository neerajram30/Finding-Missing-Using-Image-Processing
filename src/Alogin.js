import React,{useState} from 'react';
import LoginForm from './components/Admin/LoginForm';
function Login() {
  const adminUser = {
     email: "admin@123",
     password: "Aswin@13"
  }
  const [user,setUser] =useState({name:"",email:""});
  const [error, seterror]=useState("");

  const Login = details =>{
    console.log("details");
    if(details.email == adminUser.email && details.password == adminUser.password)
     { console.log("looged in");
  setUser(
    { 
         name: details.name,
        email: details.email
    }
  );
     }
  else{
    console.log("Details do not match");
    
    seterror("Details do not match")
  }

  }
    const Logout= () =>{
      setUser({name:"",email:""});
    }
  return (
    
    <div className='Login'>
      {(user.email !="" ) ?(
        <div className='Welcome'>
          <h2>Welcome <span> {user.name} </span></h2>
          <button onClick = {Logout}>logout</button>
          </div>
      ): (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
 