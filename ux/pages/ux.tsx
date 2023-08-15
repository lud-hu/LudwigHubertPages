import type { NextPage } from "next";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import { ReactNode, useState } from "react";
import PageFooter from "../components/shared/Footer";
import { ChatBubble } from "../components/ux/ChatBubble";
import Header from "../components/ux/Header";
import ProjectCard from "../components/ux/ProjectCard";
import ProjectDetailsChatConversation, {
  ProjectDetails,
} from "../components/ux/ProjectDetailsChatConversation";
import ReplySection from "../components/ux/ReplySection";
import styles from "./ux.module.scss";

const Portfolio: NextPage = () => {
  const [additionalProjectDetails, setAdditionalProjectDetails] = useState<
    ProjectDetails[]
  >([]);

  /**
   * Adds a project detail object to the state (to be rendered by ProjectDetailsChatConversation component),
   * if not already present.
   *
   * @param id a unique id to identify the project
   * @param questionText A question to be shown as chat message.
   * @param props The props for the answer chate message to be shown.
   */
  const addProjectDetailChatBubble = (
    id: string,
    questionText: string,
    answerText: string | ReactNode
  ) => {
    if (!additionalProjectDetails.map((b) => b.id).includes(id)) {
      setAdditionalProjectDetails((a) => [
        ...a,
        {
          id,
          questionText,
          answerText,
        },
      ]);
    }
  };

  return (
    <>
      <Head>
        <title>Ludwig Hubert - UX Designer and Software Engineer</title>
        <meta
          name="description"
          content="Portfolio page of Ludwig Hubert - UX Designer and Software Engineer"
        />
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

          <h1 className="sr-only">
            Intro about what I&apos;m doing, written like a chat conversation.
          </h1>

          <div id={styles["lh_chat_messages"]}>
            <ChatBubble side="right" animationIndex={1}>
              Who are you?
            </ChatBubble>
            <ChatBubble side="left" animationIndex={2}>
              Hi, I&apos;m Ludwig! 👋
              <br />
              <br />
              I&apos;m currently working as a hybrid between UX Designer and
              Software Engineer at{" "}
              <a
                href="https://polarstern-energie.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Polarstern Energie
              </a>{" "}
              in Munich and I&apos;m passionate about User Experience,
              Accessibility and Web Development. My focus is to achieve the best
              possible UX in terms of technical quality of all touchpoints.
              <br />
              <br />I love to spend my spare time outdoors with photography,
              climbing and paragliding! 🪂
            </ChatBubble>
            <ChatBubble side="right" animationIndex={3}>
              What are you working on?
            </ChatBubble>
            <ChatBubble side="left" animationIndex={4}>
              I was working on several different projects for enterprise
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
            </ChatBubble>
            <ChatBubble side="left" animationIndex={5}>
              Some project examples:
              <div className={styles["project-card-grid"]}>
                <ProjectCard
                  aria-label="Click to add info about this project at the end of the chat conversation."
                  onClick={() =>
                    addProjectDetailChatBubble(
                      "dashboard",
                      "Can you tell me more about the Statistics Dashboard?",
                      <>
                        In this project I worked on a public facing dashboard
                        showing a lot of statistics and graphs as well as on the
                        CMS used for managing the dashboard. Primarily I focused
                        on frontend and architecture, but also on interaction
                        concepts and wireframing. In the last few months I led
                        the team for visual and technical Accessibility.
                        <br />
                        The project was set up in multiple SCRUM teams working
                        in close collaboration with the customer.
                      </>
                    )
                  }
                  title="Statistics Dashboard"
                  subtitle="Enterprise B2C Platform & CMS"
                  img="./dashboard.jpg"
                />
                <ProjectCard
                  aria-label="Click to add info about this project at the end of the chat conversation."
                  onClick={() =>
                    addProjectDetailChatBubble(
                      "pim",
                      "Do you have some details for the PIM?",
                      <>
                        This project was about the internal product information
                        management tool of a manufacturer for household
                        supplies. My focus was to introduce a modern web
                        framework into the legacy application, including setting
                        up a design component system. I also performed user
                        research to conceptualize and test new interfaces before
                        implementing them.
                        <br />
                        The project was set up in one SCRUM team together with
                        the customer.
                      </>
                    )
                  }
                  href=""
                  title="Enterprise PIM"
                  subtitle="B2B Product Info Management"
                  img="./pim.jpg"
                />
                <ProjectCard
                  href="https://gliderlogbook.de"
                  title="Digital Flightbook"
                  subtitle="SaaS App"
                  img="./glb-demo.jpg"
                />
                <ProjectCard
                  href="https://github.com/lud-hu/incidence-trend"
                  title="Incidence Trend"
                  subtitle="Web Project"
                  img="./incidence-trend.png"
                />
                <ProjectCard
                  href="https://github.com/lud-hu/LudwigHubertPages"
                  title="My Portfolio"
                  subtitle="This very page"
                  img="./my-portfolio.png"
                />
                <ProjectCard
                  href="https://github.com/lud-hu/mvg-touch-timetable"
                  title="Touch Timetable"
                  subtitle="Interaction Concept"
                  img="./touch-timetable.jpg"
                />
              </div>
            </ChatBubble>
            <ChatBubble side="right" animationIndex={6}>
              Sounds cool. Tell me more!
            </ChatBubble>
            <ChatBubble side="left" animationIndex={7}>
              Just click on the project examples above or get in touch with me
              at{" "}
              <a
                href="https://www.linkedin.com/in/ludwig-hubert"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile of Ludwig"
              >
                LinkedIn
              </a>
              {" or via "}
              <a
                href="mailto:info@ludwig-hubert.de"
                target="_blank"
                rel="noreferrer"
                aria-label="Mailto link to Ludwig"
              >
                info@ludwig-hubert.de
              </a>
              .
            </ChatBubble>
            <ProjectDetailsChatConversation
              projectDetails={additionalProjectDetails}
            />
            <h2 className="sr-only">Get in touch with Ludwig</h2>
            <ReplySection />
          </div>
        </section>
        <PageFooter id={styles["footer"]} />
      </main>
    </>
  );
};

export default Portfolio;
