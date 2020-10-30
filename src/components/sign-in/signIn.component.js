import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.util'
import './signIn.component.stylr.scss';


class SignIn extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({email:'',password:''})
  }

  handleChange = (event) => {
    const { value,name} = event.target;

    this.setState({[name]:value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an Account</h2>
        <span>sign in with your email and password</span>


        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email'
            type='email'
            lable='email' 
            value={this.state.email} 
            handleChange={this.handleChange} 
            required/>
          <FormInput 
            name='password' 
            type='password' 
            lable='password'
            value={this.state.password}
            handleChange={this.handleChange} 
            required/>
          <div className='buttons'>
          <CustomButton type='submit' >Sign in</CustomButton>
          <CustomButton onClick= {SignInWithGoogle} isGoogleSignIn="true" >{' '}Sign in with Google{' '}</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;