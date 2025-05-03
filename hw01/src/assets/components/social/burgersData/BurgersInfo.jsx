import { useState } from 'react';
import burgerDreams from './burgerImages/burgerDreams.svg';
import burgerWaldo from './burgerImages/burgerWaldo.svg';
import burgerCali from './burgerImages/burgerCali.svg';
import burgerBaconBuddy from './burgerImages/burgerBaconBuddy.svg';
import burgerSpicy from './burgerImages/burgerSpicy.svg';
import burgerClassic from './burgerImages/burgerClassic.svg';

const burgers = [
  {
    name: 'Burger Dreams',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '9.20',
    image: burgerDreams,
    category: 'Dinner'
  },
  {
    name: 'Burger Waldo',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '10.00',
    image: burgerWaldo,
    category: 'Breakfast'
  },
  {
    name: 'Burger Cali',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '8.00',
    image: burgerCali,
    category: 'Breakfast'
  },
  {
    name: 'Burger Bacon Buddy',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '9.99',
    image: burgerBaconBuddy,
    category: 'Dinner'
  },
  {
    name: 'Burger Spicy',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '9.20',
    image: burgerSpicy,
    category: 'Breakfast'
  },
  {
    name: 'Burger Classic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '8.00',
    image: burgerClassic,
    category: 'Dessert'
  },
];


export default function RenderBurgers() {
  const [quantities, setQuantities] = useState(Array(burgers.length).fill(0));

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, parseInt(value) || 0);
    setQuantities(newQuantities);
  };

  return burgers.map((burger, index) => (
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
            value={quantities[index]}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
          />
          <button disabled={quantities[index] === 0}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ));
}
export { burgers };