// style
import "./Home.css";

import { useState, useEffect } from "react";
import RecipeList from "../../components/RecipeList";
import { projectFirestore } from "../../firebase/config";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    projectFirestore.collection("recipe").onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError("Could not find this recipes");
        setIsPending(false);
      } else {
        const result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        setData(result);
        setIsPending(false);
      }
    });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <RecipeList data={data} />}
    </div>
  );
}
