import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import TrashBtn from "../assets/trash_icon.svg";
// style
import "./RecipeList.css";
import { useTheme } from "../hooks/useTheme";

function RecipeList({ data }) {
  const { mode } = useTheme();

  const handleDelete = async (id) => {
    await projectFirestore.collection("recipe").doc(id).delete();
  };
  return (
    <div className="recipe-list">
      {data &&
        data.map((recipe) => {
          return (
            <div className={`card ${mode}`} key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p style={{ fontWeight: "bold" }}>Time : {recipe.cookingTime}</p>
              <br />
              <p>{recipe.method.substr(0, 100)}...</p>
              <Link to={`/recipe/${recipe.id}`}>Read More</Link>
              <img
                onClick={() => {
                  handleDelete(recipe.id);
                }}
                src={TrashBtn}
                className="delete"
                alt="delete icon"
              />
            </div>
          );
        })}
    </div>
  );
}

export default RecipeList;
