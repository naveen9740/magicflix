import "./SignIn.css";

export const SignIn = () => {
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signIn_gray">New to Magicflix? </span>
          <span className="signIn_link">Sign Up Now</span>
        </h4>
      </form>
    </div>
  );
};
