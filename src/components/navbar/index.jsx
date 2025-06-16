import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="w-full bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 text-gray-800 shadow-md p-4 rounded-xl">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-4">

        {/* Logo and Search */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="https://i.pinimg.com/originals/4e/e9/c7/4ee9c7420c4231bc38ababc9c088bf93.gif"
              width="60"
              className="rounded-full"
              alt="CookBook Logo"
            />
            <h1 className="text-3xl font-semibold text-black caveat">CookBook</h1>
          </NavLink>

          <form onSubmit={handleSubmit} className="w-full sm:w-auto">
            <input
              type="text"
              name="search"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
              placeholder="Enter Items..."
              className="bg-white/75 p-3 px-6 rounded-full outline-none w-full sm:w-80 shadow-lg shadow-red-200 focus:shadow-red-200"
            />
          </form>
        </div>

        {/* Nav Links */}
        <div className="flex gap-5 text-lg">
          <NavLink to="/" className="hover:text-gray-700">Home</NavLink>
          <NavLink to="/favorites" className="hover:text-gray-700">Favorites</NavLink>
        </div>
      </div>
    </nav>
  );
}
