import React, { useEffect, useState } from "react";
import { ChatBubbleLeft, ChatBubbleProps, ChatBubbleRight } from "./ChatBubble";
import TypingDots from "./logos/TypingDots";

export interface ProjectDetails {
  id: string;
  questionText: string;
  chatBubbleProps: ChatBubbleProps;
}

interface ProjectDetailsChatConversationProps {
  projectDetails: ProjectDetails[];
}

/**
 * Renders a fake conversation for some additional project infos.
 * E.g. a question "incoming" about one project, and then an answer "outgoing".
 * All messages are animated (1s of typing animation, then the message will appear).
 */
const ProjectDetailsChatConversation: React.FC<
  ProjectDetailsChatConversationProps
> = (props: ProjectDetailsChatConversationProps) => {
  const [additionalChatBubbles, setAdditionalChatBubbles] = useState<
    { id: string; inOut: "in" | "out"; props: ChatBubbleProps }[]
  >([]);

  /**
   * Pushes a new chat bubble with some project details
   * after a nice typing animation and a question beforehand.
   *
   * @param id the id of the project to add (to avoid duplicates)
   * @param props the props for the new chat bubble
   */
  const animateProjectConversation = (details: ProjectDetails) => {
    // Don't add it twice
    if (!additionalChatBubbles.map((b) => b.id).includes(details.id)) {
      // First, add loading animation
      setAdditionalChatBubbles((bubbles) => [
        ...bubbles,
        {
          id: details.id,
          inOut: "in",
          props: {
            scrollIntoView: true,
            children: (
              <TypingDots dotColor="var(--chat-bubble-incoming-text)" />
            ),
          },
        },
      ]);
      setTimeout(() => {
        // First, add loading animation
        setAdditionalChatBubbles((bubbles) => [
          ...bubbles.slice(0, bubbles.length - 1),
          {
            id: details.id,
            inOut: "in",
            props: {
              children: details.questionText,
            },
          },
          {
            id: details.id,
            inOut: "out",
            testa: 1,
            props: {
              children: (
                <TypingDots dotColor="var(--chat-bubble-outgoing-text)" />
              ),
            },
          },
        ]);
        // After some time, remove animation and put in content
        setTimeout(() => {
          setAdditionalChatBubbles((bubbles) => [
            ...bubbles.slice(0, bubbles.length - 1),
            {
              id: details.id,
              inOut: "out",
              props: {
                ...details.chatBubbleProps,
                scrollIntoView: true,
              },
            },
          ]);
        }, 1000);
      }, 1000);
    }
  };

  useEffect(() => {
    if (props.projectDetails.length > 0) {
      animateProjectConversation(props.projectDetails.slice(-1)[0]);
    }
  }, [props.projectDetails]);

  return (
    <>
      {additionalChatBubbles.map((c, i: number) => {
        return c.inOut === "in" ? (
          <ChatBubbleRight
            {...c.props}
            key={c.id + "r" + (c.props.scrollIntoView ? "scroll" : "")}
          />
        ) : (
          <ChatBubbleLeft
            {...c.props}
            key={c.id + "l" + (c.props.scrollIntoView ? "scroll" : "")}
          />
        );
      })}
    </>
  );
};

export default ProjectDetailsChatConversation;
