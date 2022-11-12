import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./ChatBubble.module.scss";

interface ChatBubbleProps {
  children: string | ReactNode;
  index?: number;
}

export const ChatBubbleRight: React.FC<ChatBubbleProps> = (
  props: ChatBubbleProps
) => {
  return (
    <div
      className={clsx(
        styles["lh_bubble"],
        styles["right"],
        styles["fade-in-right"]
      )}
      style={
        {
          "--delay": `${(props.index || 1) * 150}ms`,
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
  return (
    <div
      className={clsx(
        styles["lh_bubble"],
        styles["left"],
        styles["fade-in-left"]
      )}
      style={
        {
          "--delay": `${(props.index || 1) * 150}ms`,
        } as React.CSSProperties
      }
    >
      {props.children}
    </div>
  );
};
