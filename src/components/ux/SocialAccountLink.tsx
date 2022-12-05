import React, { ReactNode } from "react";
import styles from "./SocialAccountLink.module.scss";

export interface SocialAccountLinkProps {
  href: string;
  title: string;
  logo: ReactNode;
}

const SocialAccountLink: React.FC<SocialAccountLinkProps> = (
  props: SocialAccountLinkProps
) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={styles["social_account_link"]}
      title={props.title}
    >
      {props.logo}
    </a>
  );
};

export default SocialAccountLink;
