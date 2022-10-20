import styles from './announcement.module.scss';

export const AnnouncementBar = ({ headline, url, hide, hidden }) => {
  return (
    <div
      className={
        hidden ? `${styles.announcementBar}` : `${styles.announcementBar}`
      }
    >
      <a href={url} onClick={hide}>
        {headline}
      </a>
    </div>
  );
};
