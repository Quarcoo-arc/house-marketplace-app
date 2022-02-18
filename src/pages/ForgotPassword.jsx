import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            value={email}
            id="email"
            className="emailInput"
            onChange={onChange}
          />
          <Link className="forgotPasswordLink" to="/sign-in">
            Sign In
          </Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className="signInButton">
              <ArrowRightIcon fill="#fffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
