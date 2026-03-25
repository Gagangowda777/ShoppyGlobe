import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    // Header component with logo, search bar, cart and profile icons
    <div className="flex flex-col sm:flex-row justify-between items-center p-6 bg-white shadow-md border-b border-gray-200 gap-4">
    {/* ShoppyGlobe logo */}
        <div className="shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">ShoppyGlobe</h1>
        </div>
    {/* Search bar */}
        <div className="flex flex-1 max-w-md w-full bg-gray-100 rounded-full overflow-hidden">
            <label htmlFor="searchbar" className="text-xl p-3 text-gray-500"> <CiSearch /> </label>
            <input type="text" name="searchbar" id="searchbar" placeholder="Search products..." className="bg-transparent p-3 flex-1 outline-none text-gray-700"/>
        </div>
    {/* cart and profile icon */}
        <div className="flex flex-row text-2xl gap-6 shrink-0">
            <button className="hover:text-gray-600 transition-colors duration-200">
                <IoCart />
            </button>
            <button className="hover:text-gray-600 transition-colors duration-200">
                <CgProfile />
            </button>
        </div>

    </div>
  )
}

export default Header