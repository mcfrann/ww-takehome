import styles from "./announcement.module.scss";

export const AnnouncementBar = ({ headline, url, hide }) => {
  return (
    <header className={styles.announcementBar}>
      {url?.length ? (
        <a className={styles.announcement} aria-label={headline} title={headline} href={url}>
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
    </header>
  );
};
