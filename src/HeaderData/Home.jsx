import React from "react";

const Home = () => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        fontSize: "23px",
        marginTop: "100px",
        color: "white",
      }}
    >
      <h1 style={{ textAlign: "center", fontFamily: "Pacifico" }}>
        Welcome to Life With Mahesh
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <img
          src="/src/Images/IMG_0695.PNG"
          alt="Logo"
          style={{
            width: "100%",
            height: "30vh",
            maxWidth: "40vw",
          }}
        />
      </div>

      <div
        style={{ lineHeight: "1.8", textAlign: "center", margin: "10px 20px" }}
      >
        Your go-to destination for real stories, thrilling journeys, and
        meaningful content.
        <br />
        I’m Mahesh, a passionate traveler, storyteller, and digita stylel
        creator. On this channel, I explore the vibrant corners of India,
        uncover hidden gems, and connect with amazing people and cultures along
        the way. With over 71,000 subscribers, we’re building a community that
        values adventure, awareness, and authenticity. 🛣️ What you’ll find here:
        Travel vlogs from breathtaking places across India Real-time
        explorations & road trip adventures Motivational stories & social
        awareness videos Cultural insights and temple journeys Honest
        conversations and life lessons Join me on this ride as we learn, travel,
        and grow together. Don’t forget to subscribe and be part of this
        inspiring journey!
      </div>
      <button
        style={{
          margin: " auto",
          padding: "10px 20px",
          width: "fit-content",
          display: "block",
          backgroundColor: "gray",
          fontSize: "20px",
        }}
      >
        <a href="https://www.youtube.com/@LifeWithMahesh">
          <b>Visit</b>
        </a>
      </button>
    </div>
  );
};

export default Home;
