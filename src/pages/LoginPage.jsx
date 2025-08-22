import "./LoginPage.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  if (isAuthenticated()) {
    return <Navigate to="/" />;
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      fetch(
        "https://spending-tracker-backend-production.up.railway.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      )
        .then((res) => {
          if (!res.ok) throw new Error("Login failed");
          return res.json();
        })
        .then((data) => {
          localStorage.setItem("token", data.token);
          window.location.href = "/"; // redirect
        })
        .catch((err) => {
          console.error(err);
          setLoginError("Invalid credentials or server error");
        });
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        {loginError && <p style={{ color: "red" }}>{loginError}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
