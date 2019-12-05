import React from 'react';
import BitcoinPrice from './CoinPrice';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <div className='appBody'>
      <Header />
      <BitcoinPrice coin='bitcoin' title='Bitcoin' />
      <BitcoinPrice coin='ethereum' title='Ethereum' />
      <BitcoinPrice coin='ripple' title='XRP' />
      <BitcoinPrice coin='tether' title='Tether' />
      <BitcoinPrice coin='bitcoin-cash' title='Bitcoin Cash' />
      <BitcoinPrice coin='litecoin' title='Litecoin' />
      <BitcoinPrice coin='eos' title='EOS' />
      <Footer />

      </div>
    </div>   
  )
}

export default App
