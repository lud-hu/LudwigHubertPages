import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import ExportedImage from "next-image-export-optimizer";
import PageFooter from "../components/shared/Footer";

const BackgroundImage = (props: { src: string }) => (
  <ExportedImage src={props.src} alt={""} fill style={{ objectFit: "cover" }} />
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ludwig Hubert - Portfolio</title>
        <meta name="description" content="Portfolio page of Ludwig Hubert" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon-96x96.png"
        />
      </Head>

      <main className={styles["main"]}>
        {/* ABOUT SECTION */}
        <section
          id={styles["section-about"]}
          className={styles["centered-content"]}
          aria-label="Section with basic information about Ludwig"
        >
          <div id={styles["profile_image"]}>
            <ExportedImage
              src={"/ludwig.jpg"}
              alt={"portrait picture of Ludwig"}
              height={125}
              width={125}
            />
          </div>
          <h2>Ludwig Hubert</h2>
          <span style={{ fontWeight: "lighter" }} aria-label="Job description">
            UX Engineer & Photographer
          </span>
          <a href="mailto:info@ludwig-hubert.de">Get in touch</a>
          <PageFooter />
        </section>
        {/* JOB SECTION */}
        <Link
          href="/ux"
          id={styles["section-ux"]}
          className={styles["centered-content"]}
          aria-label="Link to Ludwig's main job's portfolio page"
        >
          <BackgroundImage src="/business-1.jpg" />
          <section className={styles["centered-content"]}>
            <h2>UX ENGINEERING</h2>
          </section>
        </Link>
        {/* PHOTOGRAPHY SECTION */}
        <a
          href="https://ludwig-hubert.de"
          id={styles["section-photography"]}
          className={styles["centered-content"]}
          aria-label="Link to Ludwig's photography portfolio page"
        >
          <BackgroundImage src="/homeSlider4-m.jpg" />
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
          <BackgroundImage src="/glb.png" />
          <section className={styles["centered-content"]}>
            <h2>FLIGHT LOGBOOK</h2>
            <span>SaaS Progressive Web App</span>
          </section>
        </a>
        <PageFooter className={styles["footer-mobile"]} />
      </main>
    </>
  );
};

export default Home;
