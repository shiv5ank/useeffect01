import { useState, useEffect } from "react";

const Card = () => {
  const [query, setQuery] = useState("");

  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=ba5fbb6f&app_key=e2c8eeb5604159398c051b5eb369750f&type=public`
    )
      .then((Response) => Response.json())
      .then((data) => {
        const arrayData = data.hits;
    
        setData(arrayData);
      });
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClicked]);

  return (
    <div>
      <div className="recepie_search">
        <input
          type="text_container"
          onChange={(element) => {
            setQuery(element.target.value);
          }}
          placeholder="Type Recepie Name Here"
        ></input>
        <button
          onClick={() => {
            setIsClicked((prevState) => !prevState);
          }}
        >
          {" "}
          Find
        </button>
      </div>

      <div className="display_cards">
        {data.map((item, value) => {
          return (
            <div key={value} className="recepie_cards">
              <img src={item.recipe.image} className="images" alt="/" />
              <h4>{item.recipe.label}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;