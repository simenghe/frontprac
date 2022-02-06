/*
Grid of credit cards that you can and add or delete.
Click on a specific card to get more information.
Rating system on each card.

Create a form for creating cards
{
  name: "Bob",
  email: "bob@gmail.com",
  number: "12344213123",
}
*/
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const sampleCard = {
  id: uuid(),
  username: "Bob Username",
  email: "bob@gmail.com",
};
function App() {
  const [cards, setCards] = useState(new Array(4).fill(sampleCard));
  console.log(cards);
  return (
    <div className="App">
      <header className="App-header">
        <form className="w-full bg-green-900">
          <label className="block">
            <span className="block text-sm font-medium text-white">
              Username
            </span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Username"
            ></input>
          </label>
        </form>

        <div className="grid grid-rows-4 grid-cols-2 gap-4 p-6 w-screen">
          {cards &&
            cards.map((x, i) => {
              return <Card key={i} idx={i} username={x.username} cardSet={setCards} />;
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
