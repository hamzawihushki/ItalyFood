import React from "react";
import "../../App.css";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";
import { v4 as uuidv4 } from "uuid";
import CardGategries from "./CardGategries";
const categories = [
  {
    id: uuidv4(),
    title: "Card titles",
    description: "Card descriptions",
    image: cat1,
  },
  {
    id: uuidv4(),
    title: "Card titles",
    description: "Card descriptions",
    image: cat2,
  },
  {
    id: uuidv4(),
    title: "Card titles",
    description: "Card descriptions",
    image: cat3,
  },
];
export default function Categories() {
  let categoreisJsx = categories.map((cat) => {
    return (
      <CardGategries
        key={cat.id}
        title={cat.title}
        description={cat.description}
        image={cat.image}
      />
    );
  });
  return (
    <div className="container categoreis">
      <h1 className="italic-text-dark">Lorem Ipsum Dolor</h1>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum.
      </h4>
      <div className="categories-container">{categoreisJsx}</div>
      <button type="button" className="dark-btn">
        READ MORE
      </button>
    </div>
  );
}
