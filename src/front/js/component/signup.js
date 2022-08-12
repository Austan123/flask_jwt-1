import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            actions.signup({ email, password });
            navigate("/login");
          }}
        >
          {" "}
          Signup{" "}
        </button>
      </form>
    </div>
  );
};

export default Signup;
