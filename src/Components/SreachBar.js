import { FaSearch } from "react-icons/fa";

function SreachBar() {
  return (
    <div className="w-3/4">
      <div className="relative">
        <input
          type="text"
          className=" bg-gray-100 w-full border-2 p-2 rounded-full"
          aria-label="Search talk"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
export default SreachBar;
