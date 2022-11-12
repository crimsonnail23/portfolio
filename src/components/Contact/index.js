import React, {useState} from "react";
import {validateEmail} from '../../utils/helpers'

function Contact() {
    const[formState,setFormState] =useState({name:'', email: '', message:''});
    const[errorMessage, setErrorMessage] =useState('');
    const {name,email,message} = formState;

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
