import React from 'react';
import SignIn from '../../components/sign-in/signIn.component';
import Signup from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';


const SignInAndSignUp = () => (

<div className='sign-in-and-sign-out'>
  <SignIn/>
  <Signup/>
</div>
);

export default SignInAndSignUp;