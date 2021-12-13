import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faCopy,
  faEye,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./PasswordGenerator.module.css";
import { useState } from "react";

export default function PasswordGenerator() {
  const [length, getLength] = useState(16);
  const [includeNumbers, SetIncludeNumbers] = useState(true);
  const [includeSymbols, SetIncludeSymbols] = useState(true);
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";
//   const pwdInput = document.getElementById("password");

  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    console.log(password);
    return password;
  };

  const passwordVisibility = () => {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const passwordCopy = () => {
    password.select();
    document.execCommand("copy");
    alert("Password Copied");
  };

  const generatePasswordHandler = () => {
    let characters = alpha;
    includeNumbers ? (characters += numbers) : "";
    includeSymbols ? (characters += symbols) : "";
    password.value = generatePassword(length, characters);
  };

  return (
    <div className={styles.pwd_wrapper}>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Generate your password by clicking the cycle icon"
        value=""
      />
      <div className={styles.icons}>
        <i onClick={generatePasswordHandler}>
          <FontAwesomeIcon icon={faSyncAlt} size="lg" />
        </i>
        <i onClick={passwordVisibility}>
          <FontAwesomeIcon icon={faEye} size="lg" />
        </i>
        <i onClick={passwordCopy}>
          <FontAwesomeIcon icon={faCopy} size="lg" />
        </i>
        <i>
          <FontAwesomeIcon icon={faEllipsisH} size="lg" />
        </i>
      </div>
    </div>
  );
}
