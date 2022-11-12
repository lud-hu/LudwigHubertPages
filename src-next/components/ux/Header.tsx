import React from "react";
import SocialAccountLink, { SocialAccountLinkProps } from "./SocialAccountLink";
import styles from "./Header.module.scss";
import Logo from "./logos/Logo";
import LinkedIn from "./logos/LinkedIn";
import Github from "./logos/Github";
import Xing from "./logos/Xing";
import Mail from "./logos/ Mail";

const socialAccounts: SocialAccountLinkProps[] = [
  {
    href: "https://www.linkedin.com/in/ludwig-hubert",
    logo: <LinkedIn />,
    title: "Ludwig Hubert at LinkedIn",
  },
  {
    href: "https://www.xing.com/profile/Ludwig_Hubert/",
    logo: <Xing />,
    title: "Ludwig Hubert at Xing",
  },
  //   {
  //     href: "https://dribbble.com/lud-hu",
  //     img: "images/dribbble.svg",
  //     title: "Ludwig Hubert at Dribbble",
  //   },
  {
    href: "https://github.com/lud-hu/",
    logo: <Github />,
    title: "Ludwig Hubert at Github",
  },
  //   {
  //     href: "https://twitter.com/ludwighu",
  //     img: "images/twitter.svg",
  //     title: "Ludwig Hubert at Twitter",
  //   },
  {
    href: "mailto:ux@ludwig-hubert.de",
    logo: <Mail />,
    title: "Ludwig Hubert at Mail",
  },
];

const Header: React.FC = () => {
  return (
    <header id={styles["header"]}>
      <div id={styles["logo"]}>
        <Logo />
      </div>

      <div id={styles["social_accounts"]}>
        {socialAccounts.map((s, i) => (
          <SocialAccountLink {...s} key={i} />
        ))}
      </div>
    </header>
  );
};

export default Header;
