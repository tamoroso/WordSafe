import PasswordContext from "../context/AppContext";
import "../styles/globals.css";
import "../styles/utilities.css";

function MyApp({ Component, pageProps }) {
  return (
    <PasswordContext>
      <Component {...pageProps} />
    </PasswordContext>
  );
}

export default MyApp;
