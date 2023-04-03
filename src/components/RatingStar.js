import { useState } from "react";
import Star from "./Star";

const RatingStar = () => {

    const [rating, setRating] = useState(0);

    return (
        <span>
        {[1, 2, 3, 4, 5].map((value) => (
            <Star 
             key={value} 
             filled={value <= rating}
             onClick={() => setRating(value)} />
          ))}
      </span>
    );
}


export default RatingStar