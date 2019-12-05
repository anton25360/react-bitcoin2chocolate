import React from 'react';
import './Footer.css'

class Header extends React.Component {
  
  render() {
    return (
      <div className='FooterContainer'>
        <div className='footerText'>Powered by CoinGecko API</div>
        <div className='footerText'>Made by Anton Webb</div>
      </div>
    )
  }
}
export default Header