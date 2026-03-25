import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    // Header component with logo, search bar, cart and profile icons
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 m-2 gap-4"> 
    {/* ShoppyGlobe logo */}
        <div className="shrink-0">
            <h1 className="text-xl sm:text-2xl">ShoppyGlobe</h1>
        </div>
    {/* Search bar */}
        <div className="flex flex-1 max-w-md w-full">
            <label htmlFor="searchbar" className="text-xl p-2 shrink-0"> <CiSearch /> </label>
            <input type="text" name="searchbar" id="searchbar" placeholder="search" className="border border-gray-400 p-1 rounded-2xl flex-1"/>
        </div>
    {/* cart and profile icon */}
        <div className="flex flex-row text-2xl gap-5 shrink-0"> 
            <button>
                <IoCart />   
            </button>
            <button>
                <CgProfile /> 
            </button>
        </div>

    </div>
  )
}

export default Header