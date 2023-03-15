//asks which to pull//

import React, { useState, useEffect } from "react";
import "./Home.css";
import Carousel from "./Carousel.js";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  const [selectedMascot, setSelectedMascot] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [pulledChar, setPulledChar] = useState(null);
  const [glitchedName, setGlitchedName] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3001/popmarts")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setItems(json);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://popmart-sim-api.onrender.com/popmarts');
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  

  const handleMascotSelect = (e) => {
    setSelectedMascot(e.target.value);
  };

  const handleSeriesSelect = (e) => {
    setSelectedSeries(e.target.value);
  };

  const seriesOptions = items
    .filter((item) => item.mascot === selectedMascot)
    .reduce((acc, cur) => {
      if (!acc.includes(cur.series)) {
        acc.push(cur.series);
      }
      return acc;
    }, [])
    .map((series) => (
      <option key={series} value={series}>
        {series}
      </option>
    ));

  const getCharacter = () => {
    const getCharacters = items.filter(
      (item) => item.series === selectedSeries
    );
    const getIds = getCharacters.map((char) => char._id);
    const getRandomId = getIds[Math.floor(Math.random() * getIds.length)];
    const pulledChar = getCharacters.find((item) => item._id === getRandomId);
    setPulledChar(pulledChar);
    setGlitchedName(glitchEffect(pulledChar.name));
  };

  //from https://www.youtube.com/watch?v=W5oawMJaXbU
   const glitchEffect = (name) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    let glitchedName = "";
  
    const interval = setInterval(() => {
      glitchedName = name.split("")
        .map((letter, index) => {
          if (index < iterations) {
            return name[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      setGlitchedName(glitchedName);
  
      if (iterations >= name.length) {
        clearInterval(interval);
        setGlitchedName(name); // reset the name to the original value
      }
  
      iterations += 1 / 10;
    }, 50);

    return glitchedName;
  };
  

  return (
    <div className="home-container">
      <Carousel />
      <div className="home-body">
      <div className="home-selection">
        <div className="select-mascot">
          <select value={selectedMascot} onChange={handleMascotSelect}>
            <option> Select Mascot </option>
            {Array.from(new Set(items.map((item) => item.mascot))).map(
              (mascot) => (
                <option key={mascot} value={mascot}>
                  {mascot}
                </option>
              )
            )}
          </select>
        </div>
        <div className="select-series">
          <select value={selectedSeries} onChange={handleSeriesSelect}>
            <option> Select Series </option>
            {seriesOptions}
          </select>
        </div>

        <div className="select-character">
          <button onClick={getCharacter}>UNBOX!</button>
        </div>
        </div>

        {pulledChar && (
          <div className="results">
            <div className="inner-image">
            <img key={pulledChar._id} src={pulledChar.image} alt={pulledChar.name} />
            <h2 id={pulledChar.rarity === 'Secret' && 'secret'}>{glitchedName.toUpperCase()}</h2>
            </div>
          </div>
        )}
        </div>
    </div>
  );
};

export default Home;
