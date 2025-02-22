import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay'


const Home = () => {

    const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu/>
      <RestaurantDisplay category={category}/>
    </div>
  )
}

export default Home
