import React, { useState } from "react";
import Button from "../../components/Button";
import CardSlider from "../../components/CardSlider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Teams() {
  const [selectedLabel, setSelectedLabel] = useState("Beliefsat-0");

  const handleButtonClick = (label) => {
    setSelectedLabel(label);
  };

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" active={"team"} />
      <div className="py-20 font-poppins justify-between items-center h-max mx-auto px-5 mt-5">
        
        {/* Buttons Container - Responsive Grid */}
        <div className="grid grid-cols-2 gap-4 md:flex md:space-x-4">
          <Button
            onClick={() => handleButtonClick("Beliefsat-0")}
            label="BeliefSat-0"
            type="button"
            isActive={selectedLabel === "Beliefsat-0"}
          />
          <Button
            onClick={() => handleButtonClick("Beliefsat-1")}
            label="BeliefSat-1"
            type="button"
            isActive={selectedLabel === "Beliefsat-1"}
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
          <Button
            onClick={() => handleButtonClick("Crown-GS")}
            label="Groundstation"
            type="button"
            isActive={selectedLabel === "Crown-GS"}
          />
        </div>

        {/* Card Slider Section */}
        <div className="results m-4">
          {selectedLabel && <CardSlider label={selectedLabel} />}
        </div>
      </div>

      <Footer bg={"white"} text={"black"} />
    </>
  );
}

export default Teams;
