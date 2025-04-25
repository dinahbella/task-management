import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}
