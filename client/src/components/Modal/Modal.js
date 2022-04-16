import React from "react";
import "./modal.css";
import { useState } from "react";

const Modal = ({ setShowModal }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModal(false);
  };
  const signUp = true;

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <div className="signinModal">
        <div className="closeIcon" onClick={handleClick}>
          ⓧ
        </div>
        <h2>{signUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
        <form onSubmit={{ handleSubmit }}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required={true}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required={true}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm Password"
            required={true}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Modal;
