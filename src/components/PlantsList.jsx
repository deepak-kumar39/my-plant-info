import { useState } from "react";
import useGetAllPlantsInfo from "../hooks/useGetAllPlantsInfo";
import  "../Styles/ListStyles.css";
import ShowPlantInfo from "./ShowPlantInfo";

const PlantsList = () => {
  const { plants } = useGetAllPlantsInfo();
  const [showDetails, setShowDetails] = useState({
    show: false,
    plantInfo: null,
  });

  const handleClick = (item) => {
    setShowDetails({
      show: true,
      plantInfo:item,
    });
  }

  if (showDetails.show) {
    return <ShowPlantInfo item={showDetails.plantInfo}/>
  }

  console.log(plants, "plants");
  return plants.map((item) => (
    <div className="card" key={item.id} onClick={()=>handleClick(item)}>
      <h2 className="subHeading">{item.category}</h2>
      <h1 className="plantName">{item.name}</h1>
      <p className="plantPrice">${item.price}</p>
      <img src={item.image} alt="plantImage" className="plantImage"/>
    </div>
  ));
};

export default PlantsList;
