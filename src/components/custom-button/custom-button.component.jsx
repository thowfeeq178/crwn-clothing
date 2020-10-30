 import React from 'react';

 import './custom-button.styles.scss'


 const CustomButton = ({ children,isGoogleSignIn, ...otherPrps}) => (
  <button
  className={ `${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}  {...otherPrps}
  >{children}</button>
 )

 export default CustomButton;