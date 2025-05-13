import React from "react";

const About = () => {
  return (
    <div
      style={{
        fontSize: "23px",
        textAlign: "center",
        lineHeight: "1.8",
        marginTop: "100px",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginTop: "50px" }}>AboutMe</h2>
      <br />
      Hi, <b>I’m Mahesh Babu</b>, a passionate content creator with 2 years of
      experience on YouTube.
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <img
          src="/public/IMG_1280.PNG"
          alt="pic"
          style={{ width: "370px", height: "300px", paddingRight: "50px" }}
        />
        <img
          src="/public/IMG_1281.PNG"
          alt="pic"
          style={{ width: "370px", height: "300px", paddingRight: "50px" }}
        />
        <img
          src="/public/IMG_1282.PNG"
          alt="pic"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <div>
        <br />I specialize in creating engaging and informative videos that
        inspire, entertain, and connect with a growing audience. Over the past
        two years, I’ve built a strong community by consistently delivering
        content that reflects my interests in travel, storytelling, and social
        awareness. My journey on YouTube has not only helped me sharpen my
        creative and technical skills but has also given me the opportunity to
        collaborate with amazing people and grow a loyal subscriber base. I’m
        always exploring new ideas and pushing boundaries to deliver better
        content every day.
      </div>
    </div>
  );
};

export default About;
