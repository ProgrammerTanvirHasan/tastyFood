
import { WiTime3 } from "react-icons/wi";
import { BiLike } from "react-icons/bi";



const Item = ({item,handleToBooked}) => {




    const{recipe_id,recipe_image,recipe_name,short_description,ingredients,preparation_time,calories}=item
    return (

       
      <div className=" w-full lg:w-2/3">
        <img className="w-full h-48 rounded-xl" src={recipe_image} alt="" />
        <h2 className=" flex justify-items-start text-xl font-bold">{recipe_name}</h2>
        <p className=" flex justify-items-start">{short_description}</p>
        <h3 className=" flex justify-items-start text-base font-bold">ingredients:{ingredients.length}</h3>
       
        <ul >
            {item.ingredients.slice(0,5).map(ingredient => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
       <div className="flex justify-around mt-4">
        <p className="flex gap-2"><WiTime3 className="w-6 h-6"></WiTime3> <span className="font-bold">{preparation_time}</span> </p>
        <p className="flex gap-2" > <BiLike className="w-6 h-6"></BiLike>    <span className="font-bold">{calories}</span></p>
       </div>
    
      <button onClick={()=>handleToBooked(item,recipe_id)} className="p-2 bg-green-600 rounded-xl mt-8 ">want to cook</button>
      
      </div>
      
    );
};

export default Item;