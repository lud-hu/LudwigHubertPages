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
  /**
   * Whether it should be a chatbubble on the right (incoming) or on the left (outgoing).
   */
  side: "right" | "left";
}

export const ChatBubble: React.FC<ChatBubbleProps> = (
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      aria-label="Chat message to Ludwig"
      className={clsx(styles["bubble"], styles[props.side], {
        [styles[props.side === "right" ? "fade-in-right" : "fade-in-left"]]:
          animationIndex > 0,
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
