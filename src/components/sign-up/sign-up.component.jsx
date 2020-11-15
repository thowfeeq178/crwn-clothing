import React from 'react'
import FromInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.component.scss'
class SignUp extends React.Component{
  constructor(){
    super();

    this.state = {
      displayName:'',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = (event) => {
    // event.preventDefault()
    const {name, value} = event.target;
    this.setState({
      [name] : value
    }) 
  }

   handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName,email,password,confirmPassword} = this.state;
    if(password !== confirmPassword){
      alert("oops, confirm Password didnot match with password")
      return
    }

    try{
      const {user} = await auth.createUserWithEmailAndPassword(email,password);
      await createUserProfileDocument(user,{displayName})
      this.setState( {
        displayName:'',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch(e) {
      console.log("error",e)
    }
    
  }

  render() {
    const {displayName,email,password,confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className='title'> I do not have an Account </h2>
        <span> Sign up with your email and password </span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FromInput 
            type = 'text'
            name = 'displayName'
            value={displayName}
            onChange={this.handleChange}
            lable = 'Display Name'
            required
          />
          <FromInput 
            type = 'email'
            name = 'email'
            value={email}
            onChange={this.handleChange}
            lable = 'Email'
            required
          />
          <FromInput 
            type = 'password'
            name = 'password'
            value={password}
            onChange={this.handleChange}
            lable = 'Password'
            required
          />
          <FromInput 
            type = 'password'
            name = 'confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            lable = 'Confirm Password'
            required
          />
          <CustomButton type="submit" > SIGN UP </CustomButton>
        </form>
      </div>
    )
  }
}
export default SignUp