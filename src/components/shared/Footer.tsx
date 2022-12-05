import Link from "next/link";
import React from "react";

interface PageFooterProps {
  className?: string;
  id?: string;
}

const PageFooter: React.FC<PageFooterProps> = (props: PageFooterProps) => {
  return (
    <footer className={props.className} id={props.id}>
      <Link
        href="/imprint.html"
        aria-label="Link to Ludwig's main job's portfolio page"
      >
        Imprint
      </Link>
      {/* I don't need the privacy page right now. */}
      {/* {" - "}
      <a
        href="https://www.ludwig-hubert.de/datenschutz.html"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Statement
      </a> */}
    </footer>
  );
};

export default PageFooter;
