import ExportedImage from "next-image-export-optimizer";
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
      >
        <ExportedImage src={props.img} alt={props.title} fill />
        <OpenInNewTab />
        {innerProps.children}
      </a>
    ) : (
      <div
        className={styles["media-message"]}
        style={{
          cursor: props.onClick ? "pointer" : "unset",
        }}
        onClick={props.onClick}
      >
        <ExportedImage src={props.img} alt={props.title} fill />
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
