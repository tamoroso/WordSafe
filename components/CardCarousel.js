import { useCallback, useEffect, useState } from "react";
import { useRef } from "react/cjs/react.development";
import { passwords } from "../data/passwords_data";
import { debounce } from "lodash";

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
    previousIndex: Object.keys(passwords).length - 1,
    currentIndex: 0,
    nextIndex: 1,
  });
  const carousel = useRef();

  const handleCardTransition = useCallback(
    (event) => {
      console.log(event.deltaY);
      console.log(indexes);
      if (
        indexes.currentIndex >= Object.keys(passwords).length - 1 &&
        event.deltaY > 0
      ) {
        setIndexes({
          previousIndex: Object.keys(passwords).length - 1,
          currentIndex: 0,
          nextIndex: 1,
        });
      } else if (indexes.currentIndex - 1 < 0 && event.deltaY < 0) {
        setIndexes({
          previousIndex: Object.keys(passwords).length - 2,
          currentIndex: Object.keys(passwords).length - 1,
          nextIndex: 0,
        });
      } else if (event.deltaY > 0) {
        setIndexes((prevState) => ({
          previousIndex: prevState.currentIndex,
          currentIndex: prevState.currentIndex + 1,
          nextIndex:
            prevState.currentIndex + 2 === Object.keys(passwords).length
              ? 0
              : prevState.currentIndex + 2,
        }));
      } else if (event.deltaY < 0) {
        setIndexes((prevState) => ({
          previousIndex:
            prevState.currentIndex - 2 === -1
              ? Object.keys(passwords).length - 1
              : prevState.currentIndex - 2,
          currentIndex: prevState.currentIndex - 1,
          nextIndex: prevState.currentIndex,
        }));
      }
    },
    [indexes]
  );

  useEffect(() => {
    const ul = carousel.current;
    const debouncedCardTransition = _.debounce(handleCardTransition, 200);
    ul.addEventListener("wheel", debouncedCardTransition);

    return () => {
      ul.removeEventListener("wheel", debouncedCardTransition);
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
