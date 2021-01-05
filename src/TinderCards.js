import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://media.ex-cdn.com/EXP/media.nhadautu.vn/files/content/2019/10/25/jeff-1-1427.jpg",
    },
  ]);
  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => {
              outOfFrame(person.name);
            }}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3 className="">{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
