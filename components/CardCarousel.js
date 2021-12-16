import { useCallback, useEffect, useState } from "react";
import { useRef } from "react/cjs/react.development";
import { passwords } from "../data/passwords_data";

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });
  const carousel = useRef();

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= Object.keys(passwords).length - 1) {
      setIndexes({
        previousIndex: Object.keys(passwords).length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === Object.keys(passwords).length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const ul = carousel.current;
    ul.addEventListener("wheel", handleCardTransition);

    return () => {
      ul.removeEventListener("wheel", handleCardTransition);
    };
  }, [handleCardTransition, indexes]);

  return (
    <div>
      <ul className="card_carousel" ref={carousel}>
        {Object.keys(passwords).map((key, index) => (
          <li
            key={index}
            className={`card ${determineClasses(indexes, index)} glass`}
          >
            <span>{passwords[key].url}</span>
            <span>{passwords[key].pwd}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;
