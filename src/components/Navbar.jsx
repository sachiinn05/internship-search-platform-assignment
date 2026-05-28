import {
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

const Navbar = () => {

  return (

    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-blue-600">
          Internshala
        </h1>

        <div className="hidden md:flex items-center bg-gray-100 px-4 py-3 rounded-full w-[400px]">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search internships..."
            className="bg-transparent outline-none px-3 w-full"
          />

        </div>

        <div className="flex items-center gap-5">

          <FaBell className="text-2xl text-gray-500 cursor-pointer" />

          <FaUserCircle className="text-3xl text-gray-500 cursor-pointer" />

        </div>

      </div>

    </nav>
  );
};

export default Navbar;