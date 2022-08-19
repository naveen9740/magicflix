import { useRef } from "react";
import { useAuthContext } from "../../authContext";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase";
import "./SignIn.css";

export const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { popup, setPopup } = useAuthContext();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userAuth) => console.log(userAuth))
      .catch((err) => console.log(err.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    setPopup(true);
    setTimeout(() => {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userAuth) => console.log(userAuth))
        .catch((err) => alert(err.message));
      setPopup(false);
    }, 2000);
  };
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>
      <button
        className="autofillBtn"
        onClick={() => {
          emailRef.current.value = "admin@gmail.com";
          passwordRef.current.value = "admin123";
        }}
      >
        Autofill with Test Credentials
      </button>
      <h4>
        <span className="signIn_gray">New to Magicflix? </span>
        <span className="signIn_link" onClick={register}>
          Sign Up Now
        </span>
      </h4>
      {popup && <span className="signIn_popup">Log In Success!</span>}
    </div>
  );
};
