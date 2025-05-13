import React from "react";

const Signup = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
          color: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>Signup</h1>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", fontSize: "18px", marginBottom: "5px" }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            style={{
              width: "250px",
              height: "35px",
              fontSize: "16px",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", fontSize: "18px", marginBottom: "5px" }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "250px",
              height: "35px",
              fontSize: "16px",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", fontSize: "18px", marginBottom: "5px" }}
          >
            Confirmpassword
          </label>
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "250px",
              height: "35px",
              fontSize: "16px",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>

        <button
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 80px",
            fontSize: "18px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
