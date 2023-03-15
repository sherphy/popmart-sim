import React, { Component } from 'react'
import './Pull.css'

class Pulls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  //try to mongodb 

  componentDidMount() {
    //change the URL to popmart 
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {

    var { isLoaded, items } = this.state; 

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else { 
    return (
      <div className='pulls'>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.image}/>
              <div>
              <p>Mascot: {item.mascot}</p>
              <p>Series: {item.series}</p>
              <p>Name: {item.name}</p>
              <p>Rarity: {item.rarity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
    }
  }
}

export default Pulls