import { useState } from "react";
import styles from "./DropDownMenu.module.css";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCat, setCurrentCat] = useState("Choose a category ...");

  const currentCategoryHandler = (e) => {
    setCurrentCat(e.target.innerHTML);
  };
  const dropDownHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div>
        <button className={styles.dropdown_btn} onClick={dropDownHandler}>
          {currentCat}
          <FontAwesomeIcon
            className={styles.dropdown_icon}
            icon={faArrowDown}
            size="lg"
          />
        </button>
        <input
          type="text"
          value={currentCat}
          className={styles.dropdown_input}
        />
      </div>
      {isOpen ? (
        <ul className={styles.dropdown_content} list="categories">
          <li onClick={currentCategoryHandler}>E-commerce</li>
          <li onClick={currentCategoryHandler}>Gaming</li>
          <li onClick={currentCategoryHandler}>Social Network</li>
        </ul>
      ) : null}
    </div>
  );
}
