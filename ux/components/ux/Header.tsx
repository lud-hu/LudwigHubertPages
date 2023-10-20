import React from "react";
import SocialAccountLink, { SocialAccountLinkProps } from "./SocialAccountLink";
import styles from "./Header.module.scss";
import Logo from "./logos/Logo";
import LinkedIn from "./logos/LinkedIn";
import Github from "./logos/Github";
import Mail from "./logos/ Mail";
import Link from "next/link";

const socialAccounts: SocialAccountLinkProps[] = [
  {
    href: "https://www.linkedin.com/in/ludwig-hubert",
    logo: <LinkedIn />,
    title: "Ludwig Hubert at LinkedIn",
  },
  {
    href: "https://github.com/lud-hu/",
    logo: <Github />,
    title: "Ludwig Hubert at Github",
  },
  {
    href: "mailto:ux@ludwig-hubert.de",
    logo: <Mail />,
    title: "Ludwig Hubert at Mail",
  },
];

const Header: React.FC = () => {
  return (
    <header id={styles["header"]}>
      <Link
        id={styles["logo"]}
        href="/"
        aria-label="Logo of Page, click to navigate to main Page"
      >
        <Logo />
      </Link>

      <div id={styles["social_accounts"]}>
        {socialAccounts.map((s, i) => (
          <SocialAccountLink {...s} key={i} />
        ))}
      </div>
    </header>
  );
};

export default Header;
