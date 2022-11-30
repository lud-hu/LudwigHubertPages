import React, { ReactNode } from "react";
import OpenInNewTab from "./logos/OpenInNewTab";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href?: string;
  title: string;
  img: string;
  subtitle?: string;
  onClick?: () => any;
}

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  const Wrapper = (innerProps: { children: ReactNode }) =>
    props.href ? (
      <a
        target="_blank"
        rel="noreferrer"
        className={styles["media-message"]}
        href={props.href}
        style={{ backgroundImage: props.img }}
      >
        <OpenInNewTab />
        {innerProps.children}
      </a>
    ) : (
      <div
        className={styles["media-message"]}
        style={{
          backgroundImage: props.img,
          cursor: props.onClick ? "pointer" : "unset",
        }}
        onClick={props.onClick}
      >
        {innerProps.children}
      </div>
    );

  return (
    <Wrapper>
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
