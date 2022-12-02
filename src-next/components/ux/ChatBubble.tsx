import clsx from "clsx";
import React, { ReactNode, useEffect } from "react";
import styles from "./ChatBubble.module.scss";

export interface ChatBubbleProps {
  children: string | ReactNode;
  /**
   * If animating several chatbubbles, you can use the index
   * to delay the animation to make them come in one by one.
   */
  animationIndex?: number;
  /**
   * Whether the bubble should be scrolled into view (to page bottom) on render.
   */
  scrollIntoView?: boolean;
}

export const ChatBubbleRight: React.FC<ChatBubbleProps> = (
  props: ChatBubbleProps
) => {
  const { animationIndex = 0 } = props;

  useEffect(() => {
    if (props.scrollIntoView) {
      // Hard coded access to the scroll container.
      // Not the nicest way, but for the current controlled environment OK.
      document
        .getElementsByTagName("main")[0]
        .scrollTo({ left: 0, top: 99999, behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={clsx(styles["bubble"], styles["right"], {
        [styles["fade-in-right"]]: animationIndex > 0,
      })}
      style={
        {
          "--delay": `${animationIndex * 150}ms`,
        } as React.CSSProperties
      }
    >
      {props.children}
    </div>
  );
};

export const ChatBubbleLeft: React.FC<ChatBubbleProps> = (
  props: ChatBubbleProps
) => {
  const { animationIndex = 0 } = props;
  return (
    <div
      className={clsx(styles["bubble"], styles["left"], {
        [styles["fade-in-left"]]: animationIndex > 0,
      })}
      style={
        {
          "--delay": `${(animationIndex || 0) * 150}ms`,
        } as React.CSSProperties
      }
    >
      {props.children}
    </div>
  );
};
