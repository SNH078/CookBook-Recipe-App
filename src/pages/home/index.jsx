import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
       <div className="flex flex-col items-center justify-center text-center mt-5 space-y-6">
<p className="text-xl text-center text-gray-600">
  Start your food journey by <span className="text-pink-500 font-semibold">searching something tasty</span>! 🍲
</p>


  <button
    className="bg-pink-300 text-grey px-4 py-2 rounded-lg hover:bg-pink-500 transition"
   onClick={() => alert("Not sure what to try? start with searching for 'Paneer' or 'Pasta' 🍲")}

  >
    Show Me Something Good
  </button>
</div>

      )}
    </div>
  );
}


