import styles from "./careers.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Marquee from "react-fast-marquee";

export const CareersSection = ({ section }) => {
  const {
    crawlerText,
    copy: _copy,
    applyButton,
    menuTitle,
    buttonCtaCopy,
  } = section.fields;

  const copy = documentToReactComponents(_copy);
  return (
    <section className={styles.careersSection} id={menuTitle}>
      {crawlerText && (
        <Marquee className={styles.marquee} gradient={false} speed={20}>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
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
          <div className={`${styles.buttonHeadline} button-headline`}>
            join our team
          </div>
          {applyButton && (
            <a
              href={applyButton.fields.buttonLinkUrl}
              target={applyButton.fields.openInNewWindow ? "_blank" : "_self"}
              rel="noreferrer"
              className={styles.applyButton}
            >
              <button> {applyButton.fields.buttonTitle} </button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
