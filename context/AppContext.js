import _ from "lodash";
import { createContext, useEffect, useState } from "react";
import { passwords } from "../data/passwords_data";

export const AppContext = createContext({});

export default function PasswordContext({ children }) {
  const [allPasswords, setAllPasswords] = useState(passwords);

  useEffect(() => {
    const storedData = localStorage.getItem("passwords");
    const storedObject = JSON.parse(storedData);

    if (storedData) {
      setAllPasswords(storedObject);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(allPasswords));
  }, [allPasswords]);

  return (
    <AppContext.Provider
      value={{
        state: {
          passwords: allPasswords,
        },
        setAllPasswords: setAllPasswords,
      }}
    >
      {console.log(allPasswords)}
      {children}
    </AppContext.Provider>
  );
}
