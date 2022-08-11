import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
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
        <button onClick={()=> actions.signup(email, password)}> Signup </button>
      </form>
    </div>
  );
};

export default Signup;
