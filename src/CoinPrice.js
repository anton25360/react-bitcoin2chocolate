import React from 'react';
import './CoinPrice.css'

class CoinPrice extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      coinPrice: 'Loading...',
      numOfFredos: 'Loading...'
    }
    this.getPrice()
  }

  componentDidMount() {
    setInterval(() => this.getPrice(), 5000) //runs every 5 seconds
  }

  getPrice() {
    //docs @ https://www.coingecko.com/api/documentations/v3#/
    //coin list @ https://api.coingecko.com/api/v3/coins/list

    var coin = this.props.coin // = 'bitcoin'
    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+ coin +'&vs_currencies=gbp')
      .then((data) => { return data.json() })
      .then((data) => {
        
        let price = parseFloat(data[coin].gbp).toFixed(2)
        let fredos = parseFloat(price / 0.30).toFixed(0)

        this.setState({
          coinPrice: '£' + price,
          numOfFredos: fredos
        })
      })
  }

  render() {
    return (
      <div className='BPcontainer'>
        <h1>{this.props.title} -> {this.state.coinPrice}</h1>
        <h1>You can buy {this.state.numOfFredos} Freddo's</h1>
      </div>
    )
  }
}
export default CoinPrice