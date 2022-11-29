import React from "react";

interface PageFooterProps {
  className?: string;
}

const PageFooter: React.FC<PageFooterProps> = (props: PageFooterProps) => {
  return (
    <footer className={props.className}>
      <a
        href="https://www.ludwig-hubert.de/impressum.html"
        target="_blank"
        rel="noreferrer"
      >
        Imprint
      </a>
      {" - "}
      <a
        href="https://www.ludwig-hubert.de/datenschutz.html"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Statement
      </a>
    </footer>
  );
};

export default PageFooter;
