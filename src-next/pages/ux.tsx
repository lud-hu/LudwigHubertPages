import type { NextPage } from "next";
import Head from "next/head";
import { ChatBubbleLeft, ChatBubbleRight } from "../components/ux/ChatBubble";
import Header from "../components/ux/Header";
import ProjectCard from "../components/ux/ProjectCard";
import ReplySection from "../components/ux/ReplySection";
import styles from "./ux.module.scss";
import ExportedImage from "next-image-export-optimizer";
import PageFooter from "../components/shared/Footer";

const Portfolio: NextPage = () => {
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

      <main className={styles["main-wrapper"]}>
        <Header />
        <section id={styles["home"]}>
          <div id={styles["profile_image"]}>
            <ExportedImage
              src={"/ludwig.jpg"}
              alt={"portrait picture of Ludwig"}
              width={250}
              height={250}
            />
          </div>

          <div id={styles["lh_chat_messages"]}>
            <ChatBubbleRight index={1}>Who are you?</ChatBubbleRight>
            <ChatBubbleLeft index={2}>
              Hi, I&apos;m Ludwig! 👋
              <br />
              <br />
              I&apos;m currently working as an UX Engineer at Capgemini in
              Munich and I&apos;m passionate about User Experience, Design and
              Web Development. My focus is to achieve the best possible UX in
              terms of technical quality of all touchpoints.
              <br />
              <br />I love to spend my spare time outdoors with photography,
              climbing and paragliding! 🪂
            </ChatBubbleLeft>
            <ChatBubbleRight index={3}>
              What are you working on?
            </ChatBubbleRight>
            <ChatBubbleLeft index={4}>
              I was working on several different projects for our enterprise
              customers, where I combined my skills in UX and tech to build
              prototypes, apps and services.
              <br />
              Just a few buzzwords describing my area of work:
              <ul style={{ marginBottom: 0 }}>
                <li>Interaction Concepts</li>
                <li>High- & Low-fi prototypes</li>
                <li>Bridging between Designers & Devs</li>
                <li>High quality, maintainable and scalable front-end code</li>
                <li>Architecture & Service Design</li>
                <li>Accessibility</li>
              </ul>
            </ChatBubbleLeft>
            <ChatBubbleLeft index={5}>
              Some project examples:
              <div className={styles["project-card-grid"]}>
                <ProjectCard
                  href=""
                  title="Statistics Dashboard"
                  subtitle="Enterprise B2C Platform & CMS: Frontend, Architecture, Tooling, Accessibility"
                  img="url(./dashboard.jpg)"
                />
                <ProjectCard
                  href=""
                  title="Enterprise PIM"
                  subtitle="B2B Platform: UX, Frontend, Architecture"
                  img="url(./pim.jpg)"
                />
                <ProjectCard
                  href="https://gliderlogbook.de"
                  title="Digital Flightbook"
                  subtitle="SaaS App"
                  img="url(./glb-demo.jpg)"
                />
                <ProjectCard
                  href="https://github.com/lud-hu/incidence-trend"
                  title="Incidence Trend"
                  subtitle="Web Project"
                  img="url(./incidence-trend.png)"
                />
                <ProjectCard
                  href="https://github.com/lud-hu/mvg-touch-timetable"
                  title="Touch Timetable"
                  subtitle="Interaction Concept"
                  img="url(./touch-timetable.jpg)"
                />
              </div>
            </ChatBubbleLeft>
            <ChatBubbleRight index={6}>
              Sounds cool. Tell me more!
            </ChatBubbleRight>
            <ChatBubbleLeft index={7}>
              Just click on the project examples above or get in touch with me
              at{" "}
              <a
                href="https://www.linkedin.com/in/ludwig-hubert"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              {" or via "}
              <a
                href="mailto:info@ludwig-hubert.de"
                target="_blank"
                rel="noreferrer"
              >
                info@ludwig-hubert.de
              </a>
              .
            </ChatBubbleLeft>
            <ReplySection />
          </div>
        </section>
        <PageFooter id={styles["footer"]} />
      </main>
    </>
  );
};

export default Portfolio;
