import styles from "./careers.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Marquee from "react-fast-marquee";

export const CareersSection = ({ section }) => {
  const { crawlerText, copy: _copy, applyButton, menuTitle } = section.fields;

  const copy = documentToReactComponents(_copy);
  return (
    <section className={styles.careersSection} id={menuTitle}>
      {crawlerText && (
        <Marquee className={styles.marquee} gradient={false} speed={10}>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
        </Marquee>
      )}
      <div className={styles.description}>
        <div className={styles.copyBody}>
          <div className={styles.copy}>{copy}</div>
          <a
            href={applyButton.fields.buttonLinkUrl}
            target={applyButton.fields.openInNewWindow ? "_blank" : "_self"}
            rel="noreferrer"
            className={styles.applyButton}
          >
            {applyButton.fields.buttonTitle}
          </a>
        </div>
      </div>
    </section>
  );
};
