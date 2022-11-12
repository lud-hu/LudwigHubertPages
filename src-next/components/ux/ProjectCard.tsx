import React from "react";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  title: string;
  img: string;
  subtitle?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={styles["media-message"]}
      href={props.href}
      style={{ backgroundImage: props.img }}
    >
      <div>{props.title}</div>
      {props.subtitle && <span>{props.subtitle}</span>}
    </a>
  );
};

export default ProjectCard;
