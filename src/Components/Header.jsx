import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../utils/productSlice";
import { selectSearchTerm } from "../utils/productSelector";
import { selectCartCount } from "../utils/cartSelector";

function Header() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const cartCount = useSelector(selectCartCount);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    // Header component with logo, search bar, cart and profile icons
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-white shadow-md border-b border-gray-200 gap-4 sm:gap-6 sticky top-0 z-50">
    
    {/* ShoppyGlobe logo which also routes to home page  */}
      <Link to="/" className="shrink-0">
        <h1 className="text-2xl sm:text-3xl font-bold hover:opacity-80 transition-opacity">
          ShoppyGlobe
        </h1>
      </Link>

    {/* Search bar */}
      <div className="flex flex-1 max-w-2xl w-full bg-gray-50 hover:bg-gray-100 transition-colors rounded-full overflow-hidden border border-gray-200 focus-within:border-gray-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-gray-100 shadow-inner">
        <label htmlFor="searchbar" className="text-xl pl-4 pr-2 py-3 text-gray-500 flex items-center">
          <CiSearch />
        </label>
            <input
              type="text"
              name="searchbar"
              id="searchbar"
              placeholder="Search for amazing products..."
              className="bg-transparent p-3 flex-1 outline-none text-gray-700 w-full"
              value={searchTerm}
              onChange={handleSearch}/>
        </div>

    {/* cart and profile icon */}
      <div className="flex flex-row text-2xl gap-6 sm:gap-8 shrink-0 items-center mt-2 sm:mt-0">
        <Link to="/cart" className="relative text-gray-700 hover:text-black transition-colors duration-200 p-2 rounded-full hover:bg-gray-100">
          <IoCart className="text-3xl" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center translate-x-1 -translate-y-1 shadow-sm">
              {cartCount}
            </span>
          )}
            </Link>
        <button className="text-gray-700 hover:text-black transition-colors duration-200 p-2 rounded-full hover:bg-gray-100">
          <CgProfile className="text-3xl" />
            </button>
        </div>
    </div>
  );
}

export default Header