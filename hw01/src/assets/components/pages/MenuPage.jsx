import { useState } from "react";
import Navbar from "/src/assets/components/Header";
import Footer from "/src/assets/components/Footer";
import "./MenuPage.css";
import { burgers } from "../social/data/BurgersInfo";
import seemorewave from "/src/assets/see-more-wave.svg";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("Dinner");
  const [showAll, setShowAll] = useState(false);

  const categories = [...new Set(burgers.map((b) => b.category))];

  const filteredItems = showAll
    ? burgers
    : burgers.filter((b) => b.category === selectedCategory);

  
  const [quantities, setQuantities] = useState(
    Array(burgers.length).fill(0)
  );

  return (
    <div className="menu-page">
      <Navbar />

      <main>
        <h1>Browse our menu</h1>
        <p>
          Use our menu to place an order online, or
          <span className="tooltip" title="+370 600 00000"> phone </span>
          our store to place a pickup order. Fast and fresh food.
        </p>

        <div className="filters">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category && !showAll ? "active" : ""}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false); 
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-container">
          <div className="menu-grid">
            {filteredItems.map((burger, index) => {
              
              const originalIndex = burgers.findIndex(b => b.name === burger.name);

              return (
                <div className="menu-card" key={burger.name}>
                  <img src={burger.image} alt={burger.name} />
                  <div className="menu-content">
                    <div className="menu-content-header">
                      <h3>{burger.name}</h3>
                      <div className="price">${burger.price} USD</div>
                    </div>
                    <p>{burger.description}</p>
                    <div className="menu-actions">
                      <input
                        type="number"
                        min="0"
                        value={quantities[originalIndex]}
                        onChange={(e) => {
                          const newQuantities = [...quantities];
                          newQuantities[originalIndex] =
                            Math.max(0, parseInt(e.target.value) || 0);
                          setQuantities(newQuantities);
                        }}
                      />
                      <button disabled={quantities[originalIndex] === 0}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {!showAll && (
          <div className="see-more-button">
            <button className="see-more-btn" onClick={() => setShowAll(true)}>
              See more
              <img
                src={seemorewave}
                alt="seemorewave"
                className="see-more-wave"
              />
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
