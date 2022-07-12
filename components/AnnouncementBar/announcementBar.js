import styles from "./announcement.module.scss";

export const AnnouncementBar = ({ headline, url, hide, hidden }) => {
  return (
    <div className={styles.announcementBar}>
      {url?.length ? (
        <a className={styles.announcement} href={url}>
          {headline}
        </a>
      ) : (
        <p className={styles.announcement}> {headline} </p>
      )}
      <div className={styles.hamburger} onClick={hide}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
