//asks which to pull//

import React, { useState, useEffect } from 'react';
import './Home.css'
import Carousel from './Carousel.js'

const Home = () => {
    const [items, setItems] = useState([]);
    const [selectedMascot, setSelectedMascot] = useState('');
    const [selectedSeries, setSelectedSeries] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:3001/')
        .then((res) => res.json())
        .then((json) => {
          setItems(json);
        });
    }, []);

    const handleSelect = (e) => {
        setSelectedSeries(e.target.value);
    }


  return (
    <div className="homePage">
        <Carousel/>
        {/* <h1>SELECT MASCOT</h1>
        <select value={selectedMascot} onChange={handleSelect}>
            {items.map(item => (
                <option key={item.mascot} value={item.mascot}>{item.mascot}</option>
            ))}
        </select> */}

        {/* fix duplicates */}

        {/* <h1> SELECT SERIES </h1>

        <select value={selectedSeries} onChange={handleSelect}>

        </select> */}

</div>

);
};

export default Home