import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import InternshipCard from "../components/InternshipCard";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";

import { fetchInternships } from "../services/api";

const Home = () => {

  const [internships, setInternships] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
    stipend: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {

    const data = await fetchInternships();

    const internshipArray = Object.values(data.internships_meta);

    setInternships(internshipArray);
    setFilteredData(internshipArray);

    setLoading(false);
  };

  useEffect(() => {

    const result = internships.filter((item) => {

      return (

        item.title
          ?.toLowerCase()
          .includes(filters.profile.toLowerCase())

        &&

        item.location_names
          ?.join(", ")
          .toLowerCase()
          .includes(filters.location.toLowerCase())

        &&

        item.duration
          ?.toLowerCase()
          .includes(filters.duration.toLowerCase())

        &&

        item.stipend?.salary
          ?.toLowerCase()
          .includes(filters.stipend.toLowerCase())
      );
    });

    setFilteredData(result);

  }, [filters, internships]);

  if (loading) return <Loader />;

  return (

    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <div className="max-w-7xl mx-auto px-5 py-8">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-800">

            {filteredData.length} Total Internships

          </h1>

          <p className="text-gray-500 mt-3">

            Latest internships for students and freshers

          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <div>

            <Filters
              filters={filters}
              setFilters={setFilters}
            />

          </div>

          <div className="lg:col-span-3 space-y-6">

            {
              filteredData.length > 0 ?

                filteredData.map((item) => (

                  <InternshipCard
                    key={item.id}
                    item={item}
                  />

                ))

                :

                <EmptyState />
            }

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;