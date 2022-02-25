import logo from './logo.svg';
import './App.css';
import Bored from './Bored';
import Card from './Card';
import { useState } from 'react';
import Form from './Form';
import CardList from './CardList';

function App() {
  const [cards, setCards] = useState([])
  let addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))}
  return (
    <div className="App">
      <Bored></Bored><br /><br/>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} /> 
    </div>
  );

}

export default App;
