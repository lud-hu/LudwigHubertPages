import type { NextPage } from "next";
import Head from "next/head";
import { ChatBubbleLeft, ChatBubbleRight } from "../components/ux/ChatBubble";
import Header from "../components/ux/Header";
import ProjectCard from "../components/ux/ProjectCard";
import ReplySection from "../components/ux/ReplySection";
import styles from "./ux.module.scss";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ludwig Hubert - Portfolio</title>
        <meta name="description" content="Portfolio page of Ludwig Hubert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={""}>
        <Header />
        <section id={styles["home"]}>
          <div id={styles["profile_image"]}>
            <img src="images/ludwig-new.jpg" alt="portrait picture of Ludwig" />
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
              <ul>
                <li>Interaction Concepts</li>
                <li>High- & Low-fi prototypes</li>
                <li>Bridging between Designers & Devs</li>
                <li>Accessibility</li>
                <li>Architecture & Service Design</li>
                <li>High quality, maintainable and scalable code</li>
              </ul>
              <br />
              Check out my github profile{" "}
              <a
                href="https://github.com/lud-hu/"
                target="_blank"
                rel="noreferrer"
              >
                @lud-hu
              </a>
              !
            </ChatBubbleLeft>
            <ChatBubbleLeft index={5}>
              Some project examples:
              <div className={styles["project-card-grid"]}>
                <ProjectCard
                  href=""
                  title="Statistics Dashboard"
                  subtitle="Enterprise B2C Platform & CMS: Frontend, Architecture, Tooling, Accessibility"
                  img="url(./images/dashboard.jpg)"
                />
                <ProjectCard
                  href=""
                  title="Enterprise PIM"
                  subtitle="B2B Platform: UX, Frontend, Architecture"
                  img="url(./images/pim.jpg)"
                />
                <ProjectCard
                  href="https://gliderlogbook.de"
                  title="Digital Flightbook"
                  subtitle="SaaS App"
                  img="url(./images/glb-demo.jpg)"
                />
                <ProjectCard
                  href="https://github.com/lud-hu/incidence-trend"
                  title="Incidence Trend"
                  subtitle="Web Project"
                  img="url(./images/incidence-trend.png)"
                />
                <ProjectCard
                  href="https://github.com/lud-hu/mvg-touch-timetable"
                  title="Touch Timetable"
                  subtitle="Interaction Concept"
                  img="url(./images/touch-timetable.jpg)"
                />
              </div>
              If you want to get some more info, just reach out to me.
            </ChatBubbleLeft>
            <ChatBubbleRight index={6}>
              How can we get in touch?
            </ChatBubbleRight>
            <ChatBubbleLeft index={7}>
              Feel free to add me on{" "}
              <a
                href="https://www.linkedin.com/in/ludwig-hubert"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              {" or "}
              <a
                href="https://www.xing.com/profile/Ludwig_Hubert/"
                target="_blank"
                rel="noreferrer"
              >
                Xing
              </a>
              . Otherwise, just shoot me a message at{" "}
              <a
                href="mailto:info@ludwig-hubert.de"
                target="_blank"
                rel="noreferrer"
              >
                info@ludwig-hubert.de
              </a>
              .
            </ChatBubbleLeft>
            <ChatBubbleLeft index={8}>
              Any more questions? 😊
              <br />
              Just let me know:
            </ChatBubbleLeft>
            <ReplySection />
          </div>
        </section>
        <div id={styles["footer"]}>
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
        </div>
      </main>
    </>
  );
};

export default Portfolio;
