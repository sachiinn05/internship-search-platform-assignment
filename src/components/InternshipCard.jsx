import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaHeart
} from "react-icons/fa";

const InternshipCard = ({ item }) => {

  return (

    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6">

      <div className="flex justify-between items-start">

        <div className="flex gap-4">

          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">

            {item.company_name?.charAt(0)}

          </div>

          <div>

            <h2 className="text-2xl font-semibold text-gray-800">

              {item.title}

            </h2>

            <p className="text-gray-500 mt-1">

              {item.company_name}

            </p>

          </div>

        </div>

        <button className="text-gray-400 hover:text-red-500 text-xl">

          <FaHeart />

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

        <div className="flex items-center gap-3 text-gray-700">

          <FaMapMarkerAlt className="text-pink-500" />

          <span>

            {item.location_names?.join(", ")}

          </span>

        </div>

        <div className="flex items-center gap-3 text-gray-700">

          <FaClock className="text-yellow-500" />

          <span>

            {item.duration}

          </span>

        </div>

        <div className="flex items-center gap-3 text-gray-700">

          <FaMoneyBillWave className="text-green-500" />

          <span>

            {item.stipend?.salary}

          </span>

        </div>

      </div>

      <div className="flex flex-wrap gap-2 mt-6">

        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
          React
        </span>

        <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
          Remote
        </span>

        <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm">
          Internship
        </span>

      </div>

      <div className="mt-8 flex items-center justify-between">

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">

          Actively Hiring

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">

          Apply Now

        </button>

      </div>

    </div>
  );
};

export default InternshipCard;