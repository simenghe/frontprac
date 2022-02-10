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
import { useContext, useEffect, useState } from "react";
import { CardContext } from "./contexts/CardContext";

const sampleCard = {
  id: uuid(),
  username: "Bob Username",
  email: "bob@gmail.com",
};

const initialForm = {
  username: "",
};

function App() {
  const [curCards, setCurCards] = useState(new Array(4).fill(sampleCard));
  const [cards, setCards] = useContext(CardContext);
  const [curForm, setCurForm] = useState(initialForm);

  console.log(curCards);
  console.log(cards);

  useEffect(() => {
    // setCards({ ...cards, caner: "trance" });
    setCards((prev) => {
      let newState = { ...prev, wezer: "madem" };
      return newState;
    });
  }, [setCards]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="p-10">
          <form
            className="w-full bg-green-900"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Submitted, ", curForm);
            }}
          >
            <label className="block">
              <span className="block text-sm font-medium text-white">
                Username {JSON.stringify(cards)}
              </span>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                onChange={(e) => {
                  setCurForm((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }));
                  console.log("CURFORM", curForm);
                }}
                placeholder="Username"
              ></input>
            </label>
            <button className="py-10" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="grid grid-rows-4 grid-cols-2 gap-4 p-6 w-screen">
          {curCards &&
            curCards.map((x, i) => {
              return (
                <Card
                  key={i}
                  idx={i}
                  username={x.username}
                  cardSet={setCurCards}
                />
              );
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
