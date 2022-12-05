import ExportedImage from "next-image-export-optimizer";
import React, { ReactNode, useEffect, useMemo } from "react";
import OpenInNewTab from "./logos/OpenInNewTab";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href?: string;
  title: string;
  img: string;
  subtitle?: string;
  onClick?: () => any;
  "aria-label"?: string;
}

/**
 * Wraps the ProjectCard content either as anchor or button, depending on props.
 */
const Wrapper = React.memo(
  (props: {
    children: ReactNode;
    href?: string;
    onClick?: () => any;
    "aria-label"?: string;
  }) =>
    props.href ? (
      <a
        target="_blank"
        rel="noreferrer"
        className={styles["media-message"]}
        href={props.href}
        aria-label={props["aria-label"]}
      >
        <OpenInNewTab />
        {props.children}
      </a>
    ) : (
      <button
        className={styles["media-message"]}
        style={{
          cursor: props.onClick ? "pointer" : "unset",
        }}
        onClick={props.onClick}
        aria-label={props["aria-label"]}
      >
        {props.children}
      </button>
    )
);

Wrapper.displayName = "Wrapper";

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  return (
    <Wrapper
      href={props.href}
      onClick={props.onClick}
      aria-label={props["aria-label"]}
    >
      <ExportedImage src={props.img} alt="" fill />
      <div className={styles["text-wrapper"]}>
        <div>{props.title}</div>
        {props.subtitle && (
          <span className={styles["subtitle"]}>{props.subtitle}</span>
        )}
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
