import React, { ReactNode, useEffect, useState } from "react";
import { ChatBubble, ChatBubbleProps } from "./ChatBubble";
import TypingDots from "./logos/TypingDots";

export interface ProjectDetails {
  id: string;
  questionText: string;
  answerText: string | ReactNode;
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
    { id: string; props: ChatBubbleProps }[]
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
          props: {
            side: "right",
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
            props: {
              side: "right",
              children: details.questionText,
            },
          },
          {
            id: details.id,
            props: {
              side: "left",
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
              props: {
                children: details.answerText,
                side: "left",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.projectDetails]);

  return (
    <>
      {additionalChatBubbles.map((c, i: number) => (
        <ChatBubble
          {...c.props}
          key={c.id + c.props.side + (c.props.scrollIntoView ? "scroll" : "")}
        />
      ))}
    </>
  );
};

export default ProjectDetailsChatConversation;
