import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ludwig Hubert - Portfolio</title>
        <meta name="description" content="Portfolio page of Ludwig Hubert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["main"]}>
        {/* ABOUT SECTION */}
        <section
          id={styles["section-about"]}
          className={styles["centered-content"]}
          aria-label="Section with basic information about Ludwig"
        >
          <div id={styles["profile_image"]}>
            <img src="/ludwig.jpg" alt="portrait picture of Ludwig" />
          </div>
          <h2>Ludwig Hubert</h2>
          <span style={{ fontWeight: "lighter" }} aria-label="Job description">
            UX Engineer & Photographer
          </span>
          <a href="mailto:info@ludwig-hubert.de">Get in touch</a>
          <footer>
            <a
              href="https://www.ludwig-hubert.de/impressum.html"
              target="_blank"
              rel="noreferrer"
            >
              Imprint
            </a>
            {" - "}
            <a
              href="https://www.ludwig-hubert.de/datenschutz.html"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Statement
            </a>
          </footer>
        </section>
        {/* JOB SECTION */}
        <Link href="/ux">
          <a
            id={styles["section-ux"]}
            className={styles["centered-content"]}
            aria-label="Link to Ludwig's main job's portfolio page"
          >
            <section className={styles["centered-content"]}>
              <h2>UX ENGINEERING</h2>
            </section>
          </a>
        </Link>
        {/* PHOTOGRAPHY SECTION */}
        <a
          href="https://ludwig-hubert.de"
          id={styles["section-photography"]}
          className={styles["centered-content"]}
          aria-label="Link to Ludwig's photography portfolio page"
        >
          <section className={styles["centered-content"]}>
            <h2>PHOTOGRAPHY</h2>
          </section>
        </a>
        {/* GLIDERLOGBOOK SECTION */}
        <a
          href="https://gliderlogbook.de"
          id={styles["section-gliderlogbook"]}
          className={styles["centered-content"]}
          aria-label="Link to Ludwig's flight logbook page"
        >
          <section className={styles["centered-content"]}>
            <h2>FLIGHT LOGBOOK</h2>
            <span>SaaS Progressive Web App</span>
          </section>
        </a>
      </main>
    </>
  );
};

export default Home;
