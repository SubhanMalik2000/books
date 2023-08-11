import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({ stars }) {
  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;
    return (
      <span key="index">
        {stars > index + 1 ? (
          <FaStar className="icon" />
        ) : stars > number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return <div className="icon-style flex">{ratingStar}</div>;
}

export default Star;
