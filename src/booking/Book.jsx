import { useState } from "react";


const Book = ({ book,count,setCount,handlePrepared,prepared}) => {
    const {recipe_id,  recipe_name, preparation_time, calories } = book;

   const[isVisible,setIsVisible]=useState(!prepared)

    const handlePrepare=()=>{
      setIsVisible(false)
      setCount(count-1)
      handlePrepared(recipe_id)
    }

    
    return (
        <div>
           { isVisible ?(
                <div>
                    <table className="table">
                        <tbody>
                            <tr className="flex">
                                <td>{recipe_name}</td>
                                <td>{preparation_time}</td>
                                <td>{calories}</td>
                                <td>
                                    <button
                                        onClick={handlePrepare}
                                        className="p-2 bg-green-600 rounded-xl"
                                    >
                                        preparing
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>):(
                  prepared && (
                    <div>
                    <table className="table">
                        <tbody>
                            <tr className="flex">
                                <td>{recipe_name}</td>
                                <td>{preparation_time}</td>
                                <td>{calories}</td>
                                <td>
                                    <button
                                        onClick={handlePrepare}
                                        className="p-2 bg-gray-500 rounded-xl"
                                        disabled
                                    >
                                        prepared
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                  )
                )

                }
                          
         
        </div>
    );
};

export default Book;
