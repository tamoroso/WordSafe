import styles from "./Modal.module.css";

const SettingsModal = (props) => {
  return (
    <>
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
    </>
  );
};

export default SettingsModal;
