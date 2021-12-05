import { useRef } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase";
import "./SignIn.css";

export const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userAuth) => console.log(userAuth))
      .catch((err) => alert(err.message));
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
        <h4>
          <span className="signIn_gray">New to Magicflix? </span>
          <span className="signIn_link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};
