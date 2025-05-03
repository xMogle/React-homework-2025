import React, { Component } from "react";
import Navbar from "/src/assets/components/Header";
import Footer from "/src/assets/components/Footer";
import "./MenuPage.css";
import seemorewave from "/src/assets/see-more-wave.svg";

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      selectedCategory: "",
      showAll: false,
      visibleCount: 6,
      quantities: [],
      cartCount: 0,
    };
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((res) => res.json())
      .then((data) => {
        const allowedCategories = ["Dessert", "Dinner", "Breakfast"];
  
        const meals = data.meals
          .map((meal) => ({
            name: meal.strMeal,
            description: meal.strInstructions.slice(0, 100) + "...",
            image: meal.strMealThumb,
            price: (Math.random() * 10 + 5).toFixed(2),
            category: meal.strCategory,
          }))
          .filter((meal) => allowedCategories.includes(meal.category));
  
        const categories = ["Dessert", "Dinner", "Breakfast"];
  
        this.setState({
          meals,
          categories,
          selectedCategory: "Dessert",
          quantities: Array(meals.length).fill(0),
        });
      });
  }

  handleCategoryClick = (category) => {
    this.setState({
      selectedCategory: category,
      showAll: false,
      visibleCount: 6,
    });
  };

  handleQuantityChange = (index, value) => {
    const newQuantities = [...this.state.quantities];
    newQuantities[index] = Math.max(0, parseInt(value) || 0);
    this.setState({ quantities: newQuantities });
  };

  handleSeeMore = () => {
    this.setState((prevState) => ({
      visibleCount: prevState.visibleCount + 6,
    }));
  };

  handleAddToCart = (index) => {
    const newQuantities = [...this.state.quantities];
    newQuantities[index] += 1;
  
    this.setState((prevState) => ({
      quantities: newQuantities,
      cartCount: prevState.cartCount + 1,
    }));
  };

  render() {
    const {
      meals,
      selectedCategory,
      showAll,
      visibleCount,
      categories = [],
      quantities,
    } = this.state;

    const filteredItems = meals.filter(
      (m) => showAll || m.category === selectedCategory
    );

    const visibleItems = filteredItems.slice(0, visibleCount);

    return (
      <div className="menu-page">
        <Navbar cartCount={this.state.cartCount}/>

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
                className={
                  selectedCategory === category && !showAll ? "active" : ""
                }
                onClick={() => this.handleCategoryClick(category)}
                disabled={
                  category === "Dessert" ||
                  category === "Dinner" ||
                  category === "Breakfast"
                }
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-container">
            <div className="menu-grid">
              {visibleItems.map((meal, index) => {
                const originalIndex = meals.findIndex(
                  (m) => m.name === meal.name
                );

                return (
                  <div className="menu-card" key={meal.name}>
                    <img src={meal.image} alt={meal.name} />
                    <div className="menu-content">
                      <div className="menu-content-header">
                        <h3>{meal.name}</h3>
                        <div className="price">${meal.price} USD</div>
                      </div>
                      <p>{meal.description}</p>
                      <div className="menu-actions">
                        <input
                          type="number"
                          min="0"
                          value={quantities[originalIndex] || 0}
                          onChange={(e) =>
                            this.handleQuantityChange(
                              originalIndex,
                              e.target.value
                            )
                          }
                        />
                        <button
                          onClick={() => this.handleAddToCart(originalIndex)}
                          disabled={quantities[originalIndex] === 0}>
                         Add to cart
                        </button>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {visibleCount < filteredItems.length && (
            <div className="see-more-button">
              <button className="see-more-btn" onClick={this.handleSeeMore}>
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
}

export default MenuPage;
