import React, { useState } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Projectscontent from "../../components/Projectscontent";
import Footer from "../../components/Footer";
import './projectStyles.css'
function Projects({ projectsData, loading }) {
  const [selectedLabel, setSelectedLabel] = useState("BeliefSat-0");

  const handleButtonClick = (label) => {
    setSelectedLabel(label);
  };

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" active={"projects"} />
      <div className="py-20 justify-between items-center h-max mx-auto px-5 mt-5 mb-9">

        {/* Responsive Button Grid */}
        <div className="grid grid-cols-2 gap-4 md:flex md:space-x-4">
          <Button
            onClick={() => handleButtonClick("BeliefSat-0")}
            label="BeliefSat-0"
            type="button"
            isActive={selectedLabel === "BeliefSat-0"}
          />
          <Button
            onClick={() => handleButtonClick("BeliefSat-1")}
            label="BeliefSat-1"
            type="button"
            isActive={selectedLabel === "BeliefSat-1"}
          />
          <Button
            onClick={() => handleButtonClick("Avruti")}
            label="Avruti"
            type="button"
            isActive={selectedLabel === "Avruti"}
          />
          <Button
            onClick={() => handleButtonClick("UASS")}
            label="UASS"
            type="button"
            isActive={selectedLabel === "UASS"}
          />
          <Button
            onClick={() => handleButtonClick("Somaiya-Pod")}
            label="Somaiya-Pod"
            type="button"
            isActive={selectedLabel === "Somaiya-Pod"}
          />
        </div>

        {/* Projects Content Section */}
        <div id="projectImages" className="results m-4 ">
          {loading ? (
            <p className="text-lg md:text-xl text-center">Loading projects...</p>
          ) : (
            selectedLabel && (
              <Projectscontent 
                label={selectedLabel} 
                projects={projectsData} 
                className="text-sm md:text-base"
              />
            )
          )}
        </div>
      </div>

      <Footer bg={"white"} text={"black"} />
    </>
  );
}

export default Projects;
