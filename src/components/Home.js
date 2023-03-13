//asks which to pull//

import React, { useState, useEffect } from "react";
import "./Home.css";
import Carousel from "./Carousel.js";

const Home = () => {
  const [items, setItems] = useState([]);
  const [selectedMascot, setSelectedMascot] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [pulledChar, setPulledChar] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
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
            <h2>{pulledChar.name}</h2>
            <p>Rarity: {pulledChar.rarity}</p>
            <img src={pulledChar.image} alt={pulledChar.name} />
          </div>
        )}
        </div>
    </div>
  );
};

export default Home;
