import { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      let customErrorMessage = "Please enter valid inputs";
      switch (err.code) {
        case "auth/invalid-email":
          customErrorMessage = "Please enter correct email";
          break;
        case "auth/missing-password":
          customErrorMessage = "Please enter your password";
          break;
        case "auth/invalid-credential":
          customErrorMessage = "Please enter correct inputs";
          break;
        default:
          customErrorMessage = err.message || customErrorMessage;
          break;
      }
      setError(customErrorMessage);
    }
  };
  const { signIn,googleSignIn } = useUserAuth();
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch(err) {
      setError(err.message);
    }
  }
  return (
    <div className="form-style">
      <form onSubmit={handleSubmit}>
        <h4 className="text-center">Sign in</h4>
        <hr />
        {error && (
          <div
            class="alert alert-danger py-2"
            style={{ fontSize: "14px" }}
            role="alert"
          >
            {error}
          </div>
        )}
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <GoogleButton
        className="g-btn"
        type="dark"
        style={{
          width: "100%",
          marginBottom: "15px",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        onClick={handleGoogleSignIn}
      />
      <div className="card text-center p-3">
        <b>
          Don't Have an Account?{" "}
          <Link to="/signup">
            <small className="text-primary">Sign up</small>
          </Link>
        </b>
      </div>
    </div>
  );
};

export default Signin;
