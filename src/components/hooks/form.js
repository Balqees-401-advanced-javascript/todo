  
import  { useState } from 'react';


const useForm = (callback) => {
    const [values, setValues ] = useState({});

    let handleInputChange = (e) => {        
        setValues({...values, [e.target.name]: e.target.value });
        };
      
       let handleSubmit = (e) => {
          e.preventDefault();
          e.target.reset();
          callback(values);
        };
   
    return [handleSubmit, handleInputChange];
}

export default useForm;