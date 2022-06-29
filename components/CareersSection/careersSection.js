import styles from "./careers.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Marquee from "react-fast-marquee";

export const CareersSection = ({ section }) => {
  const { crawlerText, copy, buttonCtaCopy, applyButton } = section.fields;

  return (
    <div className={styles.careersSection}>
      {crawlerText && (
        <Marquee className={styles.marquee} gradient={false} speed={10}>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
          <span>{crawlerText}</span>
        </Marquee>
      )}
    </div>
  );
};
