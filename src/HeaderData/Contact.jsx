import React from "react";
import Instagram from "../Images/instagram.png.webp";
import Facebook from "../Images/fblogo.png.png";
import Youtube from "../Images/youtube.png";

const Contact = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        marginTop: "80px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "45px" }}>
        <b>Contact</b>
      </h1>
      <p style={{ fontSize: "20px" }}>
        <br />
        You can follow and connect with me on
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        {/* Instagram Section */}
        <div>
          <a
            href="https://www.instagram.com/life_with_mahesh/profilecard/?igsh=cXJrdW5keXlhNjRv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Instagram}
              alt="Instagram Logo"
              style={{ width: "80px", height: "80px" }}
            />
          </a>
          <h2>
            <b>Instagram</b>
          </h2>
        </div>

        {/* Facebook Section */}
        <div>
          <a
            href="https://facebook.com/share/ujxMkemC8qVVKkZy/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook}
              alt="Facebook Logo"
              style={{ width: "60px", height: "60px" }}
            />
          </a>
          <h2>
            <b>Facebook</b>
          </h2>
        </div>
        <div>
          <a
            href="https://www.youtube.com/@LifeWithMahesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Youtube}
              alt="Youtube Logo"
              style={{ width: "80px", height: "80px" }}
            />
          </a>
          <h2>
            <b>Youtube</b>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
