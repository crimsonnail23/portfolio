import React, {useState} from "react";
import {validateEmail} from '../../utils/helpers'
import Form from 'react-bootstrap/Form'

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
          <h2>If You Wish To Contact Me:</h2>
          
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Name</Form.Label>
                    <Form.Control name="name" defaultValue={name} onBlur={handleChange}/>
                </Form.Group>
                <Form.Group className="contact-div">
                    <Form.Label className="contact-label" htmlFor="email">Email Address</Form.Label>
                    <input type="text" name="email"  defaultValue={email} onBlur={handleChange}/>
                </Form.Group>
                <Form.Group className="contact-div">
                    <Form.Label className="contact-label" htmlFor="message">Message</Form.Label>
                    <textarea id="message-input" type="text" name="message" rows="10" cols="20" defaultValue={message} onBlur={handleChange}/>
                </Form.Group>
                {
                    errorMessage &&
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                }
                <button type="submit">Submit</button>
            </Form>

          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
