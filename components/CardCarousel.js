import { useCallback, useEffect, useState, useRef } from "react";
import styles from "./CardCarousel.module.css";
import _ from "lodash";
import Image from "next/image";
import { extractDomain } from "../lib/dataProcessing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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

const CardCarousel = (props) => {
  const [indexes, setIndexes] = useState({
    previousIndex: Object.keys(props.data).length - 1,
    currentIndex: 0,
    nextIndex: 1,
  });
  const carousel = useRef();

  const handleCardTransition = useCallback(
    (event) => {
      if (
        indexes.currentIndex >= Object.keys(props.data).length - 1 &&
        event.deltaY > 0
      ) {
        setIndexes({
          previousIndex: Object.keys(props.data).length - 1,
          currentIndex: 0,
          nextIndex: 1,
        });
      } else if (indexes.currentIndex - 1 < 0 && event.deltaY < 0) {
        setIndexes({
          previousIndex: Object.keys(props.data).length - 2,
          currentIndex: Object.keys(props.data).length - 1,
          nextIndex: 0,
        });
      } else if (event.deltaY > 0) {
        setIndexes((prevState) => ({
          previousIndex: prevState.currentIndex,
          currentIndex: prevState.currentIndex + 1,
          nextIndex:
            prevState.currentIndex + 2 === Object.keys(props.data).length
              ? 0
              : prevState.currentIndex + 2,
        }));
      } else if (event.deltaY < 0) {
        setIndexes((prevState) => ({
          previousIndex:
            prevState.currentIndex - 2 === -1
              ? Object.keys(props.data).length - 1
              : prevState.currentIndex - 2,
          currentIndex: prevState.currentIndex - 1,
          nextIndex: prevState.currentIndex,
        }));
      }
    },
    [indexes, props.data]
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
      <h1 className={`${styles.category_header} glass`}>{props.header}</h1>
      <ul className="card_carousel" ref={carousel}>
        {Object.keys(props.data).map((key, index) => (
          <li
            key={index}
            className={`card ${determineClasses(indexes, index)} glass`}
          >
            <div className={styles.card_body}>
              <div className={styles.logo}>
                <Image
                  src={`https://logo.clearbit.com/${extractDomain(
                    props.data[key].url
                  )}`}
                  width="100px"
                  height="100px"
                  alt = "logo"
                />
              </div>
              <div className={styles.card_url_field}>
                <strong>
                  url
                  <a
                    className={styles.icon}
                    href={props.data[key].url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                  </a>
                </strong>
                <span>{props.data[key].url}</span>
              </div>
              <div className={styles.card_id_field}>
                <strong>
                  Username
                  <i className={styles.icon}>
                    <FontAwesomeIcon icon={faCopy} size="lg" />
                  </i>
                </strong>
                <input
                  type="text"
                  name="username"
                  value={props.data[key].id}
                  readOnly
                />
              </div>
              <div className={styles.card_pwd_field}>
                <strong>
                  Password
                  <i className={styles.icon}>
                    <FontAwesomeIcon icon={faCopy} size="lg" />
                  </i>
                </strong>
                <input
                  type="password"
                  name="password"
                  value={props.data[key].pwd}
                  readOnly
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;
