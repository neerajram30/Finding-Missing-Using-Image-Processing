import React,{ useState,useContext} from 'react';
import './Police.css'
// import {FirebaseContext} from '../../Context/Context'
// import { useHistory } from "react-router-dom";
import fire from '../../FirebaseConfig'

function SignupForm()
{
    // const[details, setDetails] = useState ({name: "",email:"",password:""})
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const history = useHistory()
    
    // const {firebase} = useContext(FirebaseContext);
    const [error,setError] =useState('')

    const submitHandler = e => {
        e.preventDefault();
        fire.createUserWithEmailAndPassword(email,password).then((result)=>{
             result.user.updateProfile({displayName:name}).then(()=>{
                                // history.push('/police')
                        fire.firestore().collection('police').add({
                             id:result.police.uid,
                             name:name,
                             email:email,
                           }).then(()=>{
                            //  history.push('/police');
                            console.log("success");
                       })
                         })
                       }).catch((error)=>setError(error.message));     
                 }
       
    
    
     return(
       

        <form  onClick={submitHandler}>
        <div className = 'forminner'>
            <h2>Signup</h2>
            {(error!="") ? (<div className = "error">{error}</div>) : ""}
            <div  className ='formgroup'>
                <label htmlFor ="name">Name</label>
                <input type = "text" name = "name" id = "name" onChange = {e => setName (e.target.value)} value ={name}/>
                </div>
        <div  className = 'formgroup'>
            <label htmlFor ="email">Email</label>
            <input type = "email" name = "email" id = "email" onChange = {e => setEmail (e.target.value)} value ={email}/>

            </div>
            <div  className = 'formgroup'>
                <label htmlFor ="Password">Password</label>
                <input type = "password" name = "password" id = "password" onChange = {e => setPassword (e.target.value)} value ={password} />
                </div>
        
        <button>
        Sign Up 
        </button>
     </div>
       
    </form>
     )
    
        
    }

export default SignupForm;