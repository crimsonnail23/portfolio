import React, {useState} from "react";
import {validateEmail} from '../../utils/helpers'

function Contact() {
    const[formState,setFormState] =useState({name:'', email: '', message:''});
    const[errorMessage, setErrorMessage] =useState('');
    const {name,email,message} = formState;

    const handleChange = (e) => {
        //checks if email is valid/
        if(e.target.name=== 'email'){
            const validEmail=validateEmail(e.target.value);
            //if email is not valid then run the following code.
            if(!validEmail) {
                setErrorMessage('Please enter a valid email address');
            } else{
                setErrorMessage('');
            }
        } else {
            //if nothing is written in the name field then run the following code.
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('');
            }
        }

        setFormState({...formState, [e.target.name]: e.target.value})
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Contact</h2>
          <hr />
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
