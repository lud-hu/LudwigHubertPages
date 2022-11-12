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
            <img src="images/ludwig.jpg" alt="portrait picture of Ludwig" />
          </div>

          <div id={styles["lh_chat_messages"]}>
            <ChatBubbleRight index={1}>Who are you?</ChatBubbleRight>
            <ChatBubbleLeft index={2}>
              Hi, I&apos;m Ludwig!
              <br />
              I&apos;m currently working as a UX-Designer and Front-End
              Developer at Capgemini in Munich and I&apos;m passionate about
              User Experience, Design and Web Development. I completed my
              Bachelor&apos;s degree in Human-Computer-Interaction in 2018.
              <br />
              <br />I love to spend my spare time (preferably outdoors) with
              photography, bouldering and playing the guitar! :)
            </ChatBubbleLeft>
            <ChatBubbleRight index={3}>
              Where can I find some of your work?
            </ChatBubbleRight>
            <ChatBubbleLeft index={4}>
              Either on Dribbble or on Github:
              <br />
              <a
                href="https://github.com/lud-hu/"
                target="_blank"
                rel="noreferrer"
              >
                Github @lud-hu
              </a>{" "}
              for some of my university projects and coding stuff.
              <br />
              <a
                href="https://dribbble.com/lud-hu"
                target="_blank"
                rel="noreferrer"
              >
                Dribbble @lud-hu
              </a>{" "}
              for designs and ideas I had.
              <br />
              <br />
              Find an iteratively created prototype for enhancing meal planning
              for familys{" "}
              <a
                href="https://github.com/lud-hu/MeetAndEat"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </ChatBubbleLeft>
            <ChatBubbleLeft index={5}>
              I also designed and created a few websites like{" "}
              <a
                href="https://www.ludwig-hubert.de"
                target="_blank"
                rel="noreferrer"
              >
                www.ludwig-hubert.de
              </a>{" "}
              (my photography portfolio) and more.
              <br />
              <br />
              Let me know if you want to see more! ;)
            </ChatBubbleLeft>
            <ChatBubbleLeft index={6}>
              <ProjectCard
                href="https://www.youtube.com/watch?v=1YzxBQvZrMI"
                title="Meet-and-Eat"
                subtitle="Tested Prototype"
                img="url(./images/meetandeat.jpg)"
              />
              <ProjectCard
                href="https://dribbble.com/shots/5054594-Restaurant-Menu-Card-Interaction-Concept"
                title="Restaurant App"
                subtitle="Interaction Concept"
                img="url(./images/burger.jpg)"
              />
              <ProjectCard
                href="https://partyservice-busch.de/"
                title="Caterer Website"
                subtitle="Coding Project"
                img="url(./images/caterer-site.jpg)"
              />
              <ProjectCard
                href="https://dribbble.com/shots/4523256-Fitness-App-Mockup-Screens"
                title="Fitness App"
                subtitle="Design Mockup"
                img="url(./images/fitness-app.jpg)"
              />
              <ProjectCard
                href="https://dribbble.com/shots/4523066-Interaction-Concept-Skiing-Area-App"
                title="Skiing App"
                subtitle="Interaction Concept"
                img="url(./images/skiing-app.jpg)"
              />
            </ChatBubbleLeft>
            <ChatBubbleRight index={7}>Any social networks?</ChatBubbleRight>
            <ChatBubbleLeft index={8}>
              Sure!{" "}
              <a
                href="https://www.linkedin.com/in/ludwig-hubert"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              {" and "}
              <a
                href="https://www.xing.com/profile/Ludwig_Hubert/"
                target="_blank"
                rel="noreferrer"
              >
                Xing
              </a>
              . Let's connect!
            </ChatBubbleLeft>
            <ChatBubbleLeft index={9}>
              Any more questions? :)
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
