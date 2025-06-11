import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-col items-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold text-pink-600 ">
            Favorites 
          </h1>
          <div className="flex flex-wrap justify-center gap-10">
            {favoritesList.map((item) => (
              <RecipeItem key={item.idMeal} item={item} />
            ))}
          </div>
        </>
      ) : (
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing is added in favorites.
        </p>
      )}
    </div>
  );
}
