export const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const numbers = "0123456789";
export const symbols = "!@#$%^&*_-+=";

export const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

export const passwordVisibility = () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

export const passwordCopy = () => {
  password.select();
  document.execCommand("copy");
  alert("Password Copied");
};
