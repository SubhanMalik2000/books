import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../store/Slices/userSlices";

function SreachBar() {
  const dispatch = useDispatch()
 
  const getInput =(e)=>{    
    dispatch(updateSearchTerm(e.target.value))
  }
  return (
    <div className="w-3/4">
      <div className="relative">
        <form onSubmit={(e)=> e.preventDefault()}>
          <input
            type="text"
            className="searchBar bg-gray-100 w-full border-2 p-3 rounded-full"
            aria-label="Search talk"
            placeholder="Search"
            onChange={getInput}
          />
        </form>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
export default SreachBar;
