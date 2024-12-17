import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { teams } from "../helper/teams";

const CardSlider = ({ label }) => {
  const navigate = useNavigate();

  const handleButtonClick = (image) => {
    navigate("/newpage", { state: image });
  };

  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ensure teams is an array before setting it
  useEffect(() => {
    if (Array.isArray(teams)) {
      setItems(teams); // Set the JSON data into state
      console.log('Initial teams data:', teams); // Log the teams data
    } else {
      console.error('The teams data is not an array or is undefined');
    }
  }, []); // This will run only once on initial render

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Teams data inside second useEffect:', teams);

        // Filter teams based on the label (project1, project2, or project3)
        const newRows = teams
          .filter(
            (item) =>
              label === item.project1 ||
              label === item.project2 ||
              label === item.project3
          )
          .map((item) => ({
            fname: item.fname,
            lname: item.lname,
            YearLeft: item.yearleft,
            Domain: item.domain,
            Active: item.active,
            Linkedin: item.linkedin,
            profile: item.profile,
            About: item.about,
            College: item.departmentclg,
            project1: item.project1,
            project2: item.project2,
            project3: item.project3,
            email: item.email,
          }));

        setImages(newRows); // Update state with filtered data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [label]); // Re-run when the label changes

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <div className="p-5 text-2xl">Loading...</div>
      ) : (
        <div className="flex flex-col items-center mb-10 h-max pt-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 gap-4 mb-3">
            {currentImages.map((image) => (
              <div className="relative group w-full" key={image.email}>
                <img
                  src={image.profile}
                  className="h-80 w-full object-cover rounded"
                  alt={`${image.fname} ${image.lname}`}
                />
                <div className="rounded bg-gradient-to-b from-black via-black to-transparent absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bottom-0 p-4">
                  <div className="info mt-2 items-start flex">
                    {image.YearLeft !== 0 && (
                      <span className="border border-[#8c8c73] text-[#8c8c73] px-4 py-2 rounded-full font-[Poppins] mb-2">
                        {image.YearLeft}
                      </span>
                    )}

                    <span className="border border-[#8c8c73] text-[#8c8c73] px-4 py-2 mr-2 rounded-full font-[Poppins] mb-2">
                      {image.Domain}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold">{`${image.fname} ${image.lname}`}</h3>
                  <p className="text-white text-sm">{image.About}</p>
                  <div className="mt-2">
                    <button
                      onClick={() => handleButtonClick(image)}
                      className="text-white py-2 px-4 bg-blue-600 rounded-full"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Component */}
          <Pagination
            itemsPerPage={imagesPerPage}
            totalItems={images.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};

export default CardSlider;
