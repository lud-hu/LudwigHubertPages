import React, { ReactNode } from "react";
import OpenInNewTab from "./logos/OpenInNewTab";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  title: string;
  img: string;
  subtitle?: string;
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
        style={{ backgroundImage: props.img }}
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
