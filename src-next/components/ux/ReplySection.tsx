import React, { useState } from "react";
import Mail from "./logos/ Mail";
import styles from "./ReplySection.module.scss";

const ReplySection: React.FC = () => {
  const [body, setBody] = useState("");
  return (
    <div id={styles["reply_section"]}>
      <textarea
        placeholder="Write something..."
        rows={5}
        name="comment[text]"
        autoComplete="off"
        role="textbox"
        aria-autocomplete="list"
        aria-haspopup="true"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <a
        href={`mailto:info@ludwig-hubert.de?subject=Message%20via%20ludwig-hubert.de${
          body.length > 0 ? `&body=${encodeURIComponent(body)}` : ""
        }`}
      >
        <Mail />
      </a>
    </div>
  );
};

export default ReplySection;
