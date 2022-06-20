import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
import { projectFirestore } from "../../firebase/config";

//style
import "./Create.css";

function Create() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      method,
      cookingTime: cookingTime + " minutes",
      ingredients,
    };

    try {
      await projectFirestore.collection("recipe").add(doc);
      navigate("/");
    } catch {
      console.log("Could not add this app");
    }
  };
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();

  const addIngredients = (e) => {
    e.preventDefault();
    if (!ingredients.includes(newIngredient)) {
      const newIngs = [...ingredients, newIngredient];
      setIngredients(newIngs);
    }
    setNewIngredient("");
  };

  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h1>Create New Recipe</h1>

        <label>
          <span>Title:</span>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => {
                setNewIngredient(e.target.value);
              }}
              value={newIngredient}
            />
            <button onClick={addIngredients}>ADD</button>
          </div>

          <div>
            List:{" "}
            {ingredients.map((ing) => {
              return <small key={ing}>{ing}, </small>;
            })}
          </div>
        </label>
        <label>
          <span>Method:</span>
          <textarea
            type="text"
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Cooking Time:</span>
          <input
            type="number"
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Create;
