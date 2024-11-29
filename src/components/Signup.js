import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/signin");
    } catch (err) {
      let customErrorMessage = "Please enter valid inputs";
      switch (err.code) {
        case "auth/invalid-email":
          customErrorMessage = "Please enter valid email";
          break;
        case "auth/email-already-in-use":
          customErrorMessage = "This email address is already registered";
          break;
        case "auth/weak-password":
          customErrorMessage = "Please enter strong password";
          break;
        default:
          customErrorMessage = err.message || customErrorMessage;
          break;
      }
      setError(customErrorMessage);
    }
  };
  const { signUp } = useUserAuth();
  return (
    <div className="form-style">
      <form onSubmit={handleSubmit}>
        <h4 className="text-center">Sign up</h4>
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
      <div className="card text-center p-3">
        <b>
          Have an Account?{" "}
          <Link to="/signin">
            <small className="text-primary">Sign in</small>
          </Link>
        </b>
      </div>
    </div>
  );
};

export default Signup;