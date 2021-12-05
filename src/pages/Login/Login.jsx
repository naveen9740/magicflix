import { useState } from "react";
import { SignIn } from "../SignIn/SignIn";
import "./Login.css";

export const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login_bg">
        <h1 className="login_logo">MAGICFLIX</h1>
        <button onClick={() => setSignIn(true)} className="login_btn">
          Sign In
        </button>
        <div className="login_gradient" />
      </div>
      <div className="login_body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch Anywhere, Cancel at any time.</h2>
            <h3>
              Ready to Watch? Enter your Email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
