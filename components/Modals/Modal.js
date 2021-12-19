import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Modal.module.css";
import { useRef, useEffect } from "react";
import SavedModal from "./SavedModal";
import SettingsModal from "./SettingsModal";

const Modal = (props) => {
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
          <h4>
            {props.modalType === "settings" ? "Settings" : "Password Saved !"}
          </h4>
        </div>
        <div className={styles.modal_body}>
          {props.modalType === "settings" ? (
            <SettingsModal
              length={props.length}
              setLength={props.setLength}
              includeNumbers={props.includeNumbers}
              includeSymbols={props.includeSymbols}
              setIncludeNumbers={props.setIncludeNumbers}
              setIncludeSymbols={props.setIncludeSymbols}
            />
          ) : (
            <SavedModal />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
