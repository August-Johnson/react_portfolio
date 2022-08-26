import React from "react";
import styles from "./AboutMe.module.css";
import Container from "../container/Container";

const AboutMe = () => {
  return (
    <Container>
      <h2 className={styles["about-me__header"]}>A little about me and my background</h2>
      <p>
        My name is August, but I mostly go by Gus for short. I'm a graduate of
        Saint Paul College and have an associates in Computer Science. I also
        completed the University of Minnesota Fullstack Coding Boot Camp back in
        2019. I've always enjoyed problem solving so when I first discovered
        programming, it instantly clicked and caught my attention.
      </p>
    </Container>
  );
};

export default AboutMe;
