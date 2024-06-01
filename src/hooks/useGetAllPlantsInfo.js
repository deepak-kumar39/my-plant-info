import { useState, useEffect } from "react";

const useGetAllPlantsInfo = () => {
  const [plants, setPlants] = useState([]);


  const getPlantsData = () => {
    fetch('https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/')
      .then(response => response.json())
      .then(data => setPlants(data));
  }

  useEffect(() => {
    getPlantsData();
  }, [])
  return { plants }
}

export default useGetAllPlantsInfo;
