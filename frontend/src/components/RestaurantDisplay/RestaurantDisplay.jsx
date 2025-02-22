import React, { useContext } from 'react'
import './RestaurantDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import RestaurantItem from '../RestaurantItem/RestaurantItem'

const RestaurantDisplay = ({category}) => {

    const {restaurant_list} = useContext(StoreContext)
  return (
    <div className='restaurant-display' id='restaurant-display'>
        <h2>Top restaurants near you</h2>
        <div className="restaurant-display-list">
            {restaurant_list.map((item,index)=>{
                return <RestaurantItem key={index} id={item._id} name={item.name} image={item.image} rating={item.rating} category={item.category} description={item.description}/>
            })}
        </div>
      
    </div>
  )
}

export default RestaurantDisplay
