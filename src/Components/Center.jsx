import React from "react";

const Center = () => {
  return (
    <div>
      <div
        className="CenterFont"
        style={{
          textAlign: "center",
          marginLeft: "-500px",
          marginTop: "150px",
          lineHeight: "40px",
          color: "white",
        }}
      >
        <p>
          <h1 style={{ fontSize: "40px", marginBottom: "-10px" }}>
            <b>WELCOME</b>
          </h1>
          <br />
          <b
            style={{
              color: "#1bfa5b",
              fontSize: "30px",
              marginTop: "-20px",
            }}
          >
            GET YOUR PERSONAL
          </b>
          <br />
          <b style={{ fontSize: "35px", lineHeight: "1.8" }}>TRAINER</b>
        </p>
      </div>
      <div
        className="Subfont"
        style={{
          fontSize: "20px",
        }}
      >
        <p
          style={{
            fontSize: "25px",
            textAlign: "center",
            marginLeft: "-500px",
            marginTop: "5px",
            color: "white",
          }}
        >
          <b>START YOUR CARRIER WITH LIFEWITHMAHESH</b>
        </p>
      </div>
      <div
        className="BuyCs"
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "-500px",
          marginTop: "15px",
        }}
      >
        <a href="https://www.youtube.com/@LifeWithMahesh">
          <button
            style={{
              width: "90px",
              height: "40px",
              fontSize: "15px",
              backgroundColor: "red",
              color: "White",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <b>Buy Cs </b>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Center;
