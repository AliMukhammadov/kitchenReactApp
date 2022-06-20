import { useParams } from "react-router";
import { useState } from "react";
import { projectFirestore } from "../../firebase/config";
// style
import "./Recipe.css";

function Recipe() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  projectFirestore
    .collection("recipes")
    .doc(id)
    .get()
    .then((doc) => {
      setData(doc.data());
    });

  return (
    <div className="recipe">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <ul>
            {data.ingredients.map((ing) => {
              return <li key={ing}>{ing}</li>;
            })}
          </ul>
          <p>Cooking Time: {data.cookingTime}</p>
          <p>Method: {data.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
