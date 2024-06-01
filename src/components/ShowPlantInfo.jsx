const ShowPlantInfo = ({ item }) => {
  return (
    <div className="pageContainer">
      <div className="header">
        <h2>{item.category}</h2>
        <span className="rating">4.8</span>
      </div>
      <h1 className="plantName">{item.name}</h1>
      <div className="priceWrapper">
        <p className="label">PRICE</p>
        <h3 className="price">${item.price}</h3>
      </div>
      <div className="sizeWrapper">
        <p className="label">SIZE</p>
        <h4 className="size">{item.size}</h4>
      </div>
      <img src={item.image} alt="plantImage" className="plantImage"/>
    </div>
  );
};
export default ShowPlantInfo;
