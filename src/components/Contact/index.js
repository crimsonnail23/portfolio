import React, {useState} from "react";
import {validateEmail} from '../../utils/helpers'
import Form from 'react-bootstrap/Form'

//this page will allow people to contact me through the forms provided.

function Contact() {
    const[formState,setFormState] =useState({name:'', email: '', message:''});
    const[errorMessage, setErrorMessage] =useState('');
    const {name,email,message} = formState;

    //this will
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
    //for now handleSubmit will just console log the information.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>If You Wish To Contact Me:</h2>
          {/* this form will trigger handleSubmit function on submit. */}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label >Name</Form.Label>
                    {/* if the user clicks off the element, or if they submit, then handleChange will check if the submissions are valid */}
                    <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label  htmlFor="email">Email Address</Form.Label>
                    <Form.Control type="text" name="email"  defaultValue={email} onBlur={handleChange}/>
                </Form.Group>
                <Form.Group className="contact-div">
                    <Form.Label className="contact-label" htmlFor="message">Message</Form.Label>
                    <Form.Control as="textarea" id="message-input" type="text" name="message" rows="10" cols="20" defaultValue={message} onBlur={handleChange}/>
                </Form.Group>
                {/* if there is something wrong with the submission, like an empty field or an improper email, then this message will get triggered. */}
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
