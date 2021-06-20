import React from "react";
import Typewriter from "typewriter-effect";

import styles from "./home.module.css";

function Home() {

  return (
    <section className="w-full h-screen">

      <article className="flex flex-col justify-center items-center h-full">
        <h1 className={`text-5xl font-semibold ${styles.header}`}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 21,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "HELLO I'M <span style='color: #DEA745;'>BEKİR</span>  ERDEM"
                )
                .pauseFor(900)
                .deleteAll()
                .typeString(
                  "I'M <span style='color: #DEA745;'>FRONT-END</span> DEVELOPER"
                )
                .pauseFor(900)
                .start();
            }}
          />
        </h1>
        <div className={` pt-10${styles.icons}`}>
          <a
            href="https://github.com/Bekirerdem"
            target="_blank"
            rel="noreferrer"
            className={`fa fa-github text-3xl ${styles.icon}`}
            title="GitHub"
          >
            {null}
          </a>
          <a
            href="https://www.linkedin.com/in/bekir-erdem-016231173/"
            target="_blank"
            rel="noreferrer"
            className={`fa fa-linkedin text-3xl ${styles.icon}`}
            title="Linkedin"
          >
            {null}
          </a>
          <a
            href="https://medium.com/@l3ekirerdem"
            target="_blank"
            rel="noreferrer"
            className={`fab fa-medium-m text-3xl ${styles.icon}`}
            title="Youtube"
          >
            {null}
          </a>
          <a
            href="https://www.behance.net/bekirerdem"
            target="_blank"
            rel="noreferrer"
            className={`fa fa-behance text-3xl ${styles.icon}`}
            title="Behance"
          >
            {null}
          </a>
          <a
            href="https://twitter.com/l3ekirerdem"
            target="_blank"
            rel="noreferrer"
            className={`fa fa-twitter text-3xl ${styles.icon}`}
            title="Twitter"
          >
            {null}
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className={`fab fa-telegram-plane text-3xl ${styles.icon}`}
            title="Telegram"
          >
            {null}
          </a>
        </div>
      </article>
      <a href="/about" className={styles.aboutLink}>
        About Me
      </a>
      <div className={styles.border}></div>
      <img className={styles.rounded} src="image/ellipse2.png" alt="Rounded" />
      <img className={styles.rounded2} src="image/ellipse4.png" alt="Rounded" />
      <img className={styles.rounded3} src="image/ellipse1.png" alt="Rounded" />
      <img className={styles.rounded4} src="image/ellipse3.png" alt="Rounded" />
      <img
        className={styles.triangle}
        src="image/Polygon1.png"
        alt="triangle"
      />
      <img
        className={styles.triangle2}
        src="image/Polygon2.png"
        alt="triangle"
      />
      <img
        className={styles.triangle3}
        src="image/Polygon3.png"
        alt="triangle"
      />
    </section>
  );
}

export default Home;
