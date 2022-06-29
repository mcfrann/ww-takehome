import styles from "./announcement.module.scss";

export const AnnouncementBar = ({ headline, url }) => {
  return (
    <div className={styles.announcementBar}>
      <a href={url}> {headline} </a>
    </div>
  );
};
