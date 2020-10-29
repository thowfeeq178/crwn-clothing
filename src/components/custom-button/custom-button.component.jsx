 import React from 'react';

 import './custom-button.styles.scss'


 const CustomButton = ({ children, ...otherPrps}) => (
  <button
  className='custom-button'  {...otherPrps}
  >{children}</button>
 )

 export default CustomButton;