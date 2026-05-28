const EmptyState = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm border p-10 text-center">

      <h2 className="text-3xl font-bold text-gray-700">

        No Internships Found 😢

      </h2>

      <p className="text-gray-500 mt-3">

        Try changing filters

      </p>

    </div>
  );
};

export default EmptyState;