import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./SettingsModal.module.css";
import { useRef, useEffect } from "react";

const SettingsModal = (props) => {
  const modalBackDrop = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        props.modalOpen &&
        modalBackDrop.current &&
        !modalBackDrop.current.contains(e.target)
      ) {
        props.settingsHandler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.modalOpen, props]);

  if (!props.modalOpen) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={`${styles.modal_content} glass`} ref={modalBackDrop}>
        <div className={styles.modal_header}>
          <i onClick={props.settingsHandler}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </i>
          <h4>Settings</h4>
        </div>
        <div className={styles.modal_body}>
          <form>
            <div className={styles.modal_length_field}>
              <label htmlFor="pwd_length">Password length :</label>
              <input
                type="number"
                name="pwd_length"
                value={props.length}
                onChange={(e) => {
                  props.setLength(e.target.value);
                }}
              />
            </div>
            <div className={styles.modal_number_field}>
              <input
                type="checkbox"
                name="numbers"
                checked={props.includeNumbers}
                onClick={() => {
                  props.setIncludeNumbers(!props.includeNumbers);
                }}
              />
              <label htmlFor="numbers">Include numbers</label>
            </div>
            <div className={styles.modal_symbol_field}>
              <input
                type="checkbox"
                name="symbols"
                checked={props.includeSymbols}
                onClick={() => {
                  props.setIncludeSymbols(!props.includeSymbols);
                }}
              />
              <label htmlFor="symbols">Include symbols</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
