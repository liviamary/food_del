import React from 'react'
import './RestaurantItem.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const RestaurantItem = ({id,name,image,rating,category,description}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/restaurant/${id}`); 
      };
    

  return (
    <div className='restaurant-item'>
        <div className="restaurant-item-img-container" onClick={handleClick} style={{ cursor: "pointer" }}>
           <img  className='restaurant-item-image'src={image} alt="" /> 
        </div>
        <div className="restaurant-item-info">
            <div className="restaurant-item-name-rating" onClick={handleClick} style={{ cursor: "pointer" }}>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="restaurant-item-category"><strong>Category:</strong> {category}</p>
            <p className="restaurant-item-desc">{description}</p>
        </div>
      
    </div>
  )
}

export default RestaurantItem
