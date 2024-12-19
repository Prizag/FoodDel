/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
import {useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


// eslint-disable-next-line react/prop-types
const FoodDisplay = ({category}) => {

    // eslint-disable-next-line no-unused-vars
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
       <h2>Top dishes near you</h2>
       <div className="food-display-list">
        {
          food_list.map((item,index)=>{
            if(category==="All" || category===item.category ){
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
             
          })
        }
       </div>
    </div>
  )
}

export default FoodDisplay