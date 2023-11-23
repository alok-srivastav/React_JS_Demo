const ResCard = ( {resData} ) => {
    const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info;
    return (
      <div className="resCard ellipsis" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="resImage"
          alt="res-logo"
          src="https://meghanafoods.co.in/assets/img/banner/banner-4.jpg"
        />
        <h3>{name}</h3>
        <h4 className="ellipsis">{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} for TWO</h4>
        <h4>{resData?.info?.sla?.deliveryTime} mins</h4>
      </div>
    );
  };

export default ResCard;