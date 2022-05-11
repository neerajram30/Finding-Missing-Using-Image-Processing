// import React,{ useState} from 'react';
// import './Police.css'
// import {FirebaseContext} from '../../Context/Context'

// function LoginForm({Login,error})
// {
//     // const[details, setDetails] = useState ({name: "",email:"",password:""})
//     const [name,setName] = useState('');
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');
//     const history = useHistory()
//     const isInvalid =password === "" || email === "" || name ==="";
//     const {firebase} = useContext(FirebaseContext);

//     const submitHandler = e => {
//         e.preventDefault();
//         firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
//             result.user.updateProfile({displayName:userName}).then(()=>{
//               history.push('/police')
//               firebase.firestore().collection('users').add({
//                 id:result.user.uid,
//                 name:name,
//                 email:email,
//               }).then(()=>{
//                 history.push('/police');
//               })
//             })
//           }).catch((error)=>setError(error.message));     
//     }
    
//      return(
       

//         <form onSubmit={submitHandler}>
//         <div className = 'forminner'>
//             <h2>Login</h2>
//             {(error!="") ? (<div className = "error">{error}</div>) : ""}
//             <div  className ='formgroup'>
//                 <label htmlFor ="name">Name</label>
//                 <input type = "text" name = "name" id = "name" onChange = {e => setName (e.target.value)} value ={name}/>
//                 </div>
//         <div  className = 'formgroup'>
//             <label htmlFor ="email">Email</label>
//             <input type = "email" name = "email" id = "email" onChange = {e => setEmail (e.target.value)} value ={email}/>

//             </div>
//             <div  className = 'formgroup'>
//                 <label htmlFor ="Password">Password</label>
//                 <input type = "password" name = "password" id = "password" onChange = {e => setPassword (e.target.value)} value ={password} />
//                 </div>
//         <input type = "submit" value = "Sign In"> 
         
        
//          </input>   
//         <button onClick ="submit">
//         Sign Up 
//         </button>
//      </div>
       
//     </form>
//      )
    
        
//     }

// export default LoginForm;