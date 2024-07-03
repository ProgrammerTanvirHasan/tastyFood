import { useState } from "react";
import Book from './Book';

const Booking = ({  booked, count, setCount }) => {
    const [prepared, setPrepared] = useState([]);
   const[count2,setCount2]=useState(0)

    const handlePrepared=(recipe_id)=>{
     setCount2(count2+1)
     const preparedItem= booked.find(book=>book.recipe_id===recipe_id);
     setPrepared([...prepared,preparedItem]);

    }

    

    return (
        <div>
            <div className="w-auto">
                <h2 className="text-2xl font-bold">Want to cook: {count}</h2>
                <div className="flex justify-around font-semibold mt-2">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                    <p></p>
                    <p></p>
                </div>
                {
                    booked.map(book=> <Book key={book.recipe_id} book={book} count={count} setCount={setCount}  handlePrepared={handlePrepared}></Book>)
                }

              

                <div>
                    <h2 className="text-2xl font-bold">Prepared running:{count2}</h2>
                    <div className="flex justify-around font-semibold mt-2">
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                        <p></p>
                        <p></p>
                    </div>
                  

                    {
                        prepared.map(book=> <Book key={book.recipe_id} book={book} prepared={prepared} ></Book>)
                    }

                 
                </div>
            </div>
        </div>
    );
};

export default Booking;
