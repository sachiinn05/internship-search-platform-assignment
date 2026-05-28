const Filters = ({ filters, setFilters }) => {

  const handleChange = (e) => {

    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (

    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Filters
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Profile"
          name="profile"
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Duration"
          name="duration"
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Stipend"
          name="stipend"
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

    </div>
  );
};

export default Filters;