import './RegisterPage.css';
import { useState } from 'react';
import { isAuthenticated } from "../auth/auth";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    if (isAuthenticated()) {
        return <p>Already registered</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.email.includes("@")) newErrors.email = "Invalid email";
        if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            })
                .then((res) => {
                    if (!res.ok) throw new Error("Failed to register");
                    return res.json();
                })
                .then((data) => {
                    localStorage.setItem("token", data.token); // salvezi tokenul primit de la backend
                    alert("Registered successfully!");
                    window.location.href = "/"; // redirect acasă
                    console.log(data);
                    setFormData({ email: "", password: "", confirmPassword: "" });
                    setErrors({});
                })
                .catch((err) => {
                    if (err.message.includes("409")) {
                        alert("This email is already registered.");
                    } else {
                        alert("Registration failed");
                        console.error(err);
                    }
                });
        }
    };

    return (
        <div className='register-page'>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>

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

                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                    )}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
