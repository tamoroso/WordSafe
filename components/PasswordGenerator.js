import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faCopy,
  faEye,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./PasswordGenerator.module.css";
import {
  passwordVisibility,
  passwordCopy,
  generatePassword,
  alpha,
  numbers,
  symbols,
} from "../lib/password";

export default function PasswordGenerator(props) {
  const generatePasswordHandler = () => {
    let characters = alpha;
    props.includeNumbers ? (characters += numbers) : "";
    props.includeSymbols ? (characters += symbols) : "";
    props.setPassword(generatePassword(props.length, characters));
  };
  return (
    <div className={styles.pwd_wrapper}>
      <input
        type="password"
        name="password"
        id="password"
        placeholder=""
        value={props.password}
        readOnly={true}
        required
      />
      <div className={styles.icons}>
        <i onClick={generatePasswordHandler}>
          <FontAwesomeIcon icon={faSyncAlt} size="s" />
        </i>
        <i onClick={passwordVisibility}>
          <FontAwesomeIcon icon={faEye} size="s" />
        </i>
        <i onClick={passwordCopy}>
          <FontAwesomeIcon icon={faCopy} size="s" />
        </i>
        <i onClick={props.settingsHandler}>
          <FontAwesomeIcon icon={faEllipsisH} size="s" />
        </i>
      </div>
    </div>
  );
}
