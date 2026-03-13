import { IoCart } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div className="flex justify-between p-6">
        <div>
            <h1 className="text-2xl">ShoppyGlobe</h1>
        </div>

        <div className="flex">
            <label htmlFor="searchbar" className="text-xl"><IoSearch /> </label>
            <input type="text" name="searchbar" id="searchbar" placeholder="search" className="border border-gray-400 p-1 rounded"/>
        </div>

        <div className="flex flex-row text-xl gap-4"> 
            <button>
                <CgProfile />
            </button>
            <button>
                <IoCart />
                
            </button>
        </div>

    </div>
  )
}

export default Header