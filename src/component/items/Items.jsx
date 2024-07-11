import { useEffect } from "react";
import { useState } from "react";
import Item from "../item/Item";
import Booking from "../../booking/Booking";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDataFromStorage, saveCardToStorage } from "../../utility/localStorage";






const Items = () => {
   const[items,setItems]=useState([]);
   const [booked,setBooked]=useState([])
   const[count,setCount]=useState(0)
  
   useEffect(()=>{
    fetch('/blog.json')
    .then(res=>res.json())
    .then(data=>setItems(data));
    

   },[])


const handleToBooked = (item, recipe_id) => {
    const existingData = getDataFromStorage(recipe_id);

    if (existingData.includes(recipe_id)) {
        toast.error('Already confirmed');
        
    }else{
        saveCardToStorage(recipe_id);
        const newBooked = [...booked, item];
        setBooked(newBooked);
        setCount(count + 1);
        toast('Order delivered successfully');

    }
   
};

    return (
        <div>
            <h2 className="font-extrabold text-2xl mb-8">Our Recipes</h2>
            <p>we ensure all healthy food with test and we menaged authentic food.that you in our receipe, <br />everything has there. </p>
           <div className="lg:flex gap-2 mt-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {
                items.map(item=> <Item item={item} key={item.recipe_id}handleToBooked={handleToBooked}   ></Item>)
            }
           </div>
           <div >
           
            <Booking booked={booked} count={count}  items={items}  setCount={setCount} ></Booking>
           </div>
           
           </div>
      <ToastContainer/>
     
         
        </div>
    );
};

export default Items;