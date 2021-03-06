import React,{ useState} from 'react';
import './Admin.css'

function LoginForm({Login,error})
{
    const[details, setDetails] = useState ({name: "",email:"",password:""})


    const submitHandler = e => {
        e.preventDefault();

        Login(details);   

    }
     return(
       

        <form onSubmit={submitHandler}>
        <div className = 'forminner'>
            <h2>Login</h2>
            {(error!="") ? (<div className = "error">{error}</div>) : ""}
            <div  className ='formgroup'>
                <label htmlFor ="name">Name</label>
                <input type = "text" name = "name" id = "name" onChange = {e => setDetails ({...details,name:e.target.value})} value ={details.name}/>
                </div>
        <div  className = 'formgroup'>
            <label htmlFor ="email">Email</label>
            <input type = "email" name = "email" id = "email" onChange = {e => setDetails ({...details,email:e.target.value})} value ={details.email}/>

            </div>
            <div  className = 'formgroup'>
                <label htmlFor ="Password">Password</label>
                <input type = "password" name = "password" id = "password" onChange = {e => setDetails ({...details,password:e.target.value})} value ={details.password} />
                </div>
        <input type = "submit" value = "login"> 
       </input>
        </div>
    </form>
     )
    
        
    }

export default LoginForm;