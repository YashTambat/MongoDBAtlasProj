
import React ,{useState} from 'react';
import axios from 'axios';

const Form=()=>{
const[name,setName] = useState("");
const[email , setEmail] = useState("");

const addInfo = async () => {
    console.log("Sending data to backend...",name , email);
    try {
      const response = await axios.post('http://localhost:5000/user', {
        "name": name,
        "email": email
      });
      console.warn("response" ,response)

      if (response.status === 201) {
        console.log("User added successfully:", response.data);
      } else {
        console.error("Error adding user:", response.data);
      }
    } catch (error) {
      console.error("Network or server error:", error);
    }

    
  };
    return(
        <div className='form'>
            <h1> Enters details below : </h1>
            <div className='form-container'>
            <input type='text' className='input-box' onChange={(e)=>setName(e.target.value)} placeholder='enter name' value={name}/>
            
            <input type='text' className='input-box' onChange={(e)=>setEmail(e.target.value)} placeholder='enter email' value={email}/>

            <button type='button'onClick={addInfo}>Add data</button>
            </div>
            
        </div>
    )
}
export default Form;

