import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

//can do typing one of two ways

//First way is to setup an interface
// interface StarRatingProps {
//   numOfStars: number;
// }

// //Pass interface here
// export default function StarRating({ numOfStars }: StarRatingProps) {
//   return (
//     <div className='star-rating'>
//       {[...Array(numOfStars)].map((_, index) => (
//         <span key={index}>⭐</span>
//       ))}
//     </div>
//   );
// }

//Second way is to do inline:
// The first { numOfStars } is the destructuring of the props object.
// The second { numOfStars: number } is the type annotation for the entire props object.
// We're saying that the component expects a props object with a property numOfStars of type number.

export default function StarRating({ numOfStars }: { numOfStars: number }) {
  const [rating, setRating] = useState(0);
  const [hover, sethover] = useState(0);

  const handleClick = (currIndx: number) => {
    setRating(currIndx);
  };

  const handleMouseEnter = (currIndx: number) => {
    sethover(currIndx);
  };

  const handleMouseLeave = () => {
    sethover(rating);
  };

  return (
    <div className='star-rating'>
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
