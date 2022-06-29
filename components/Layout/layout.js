import styles from "./layout.module.scss";
import Head from "next/head";
import { Header } from "../Header/header.js";
import { AnnouncementBar } from "../AnnouncementBar/announcementBar.js";
import { Footer } from "../Footer/footer.js";

export const Layout = ({
  children,
  title,
  id,
  metaDescription,
  footer,
  header,
  announcementBar,
}) => {
  const { display, headline, linkUrl } = announcementBar.fields;
  const hasAnnoucement = announcementBar && headline && display;
  return (
    <div className={styles.container} id={id}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wlo5gtv.css" />
      </Head>
      {hasAnnoucement && <AnnouncementBar headline={headline} url={linkUrl} />}
      <Header headerNav={header} footerNav={footer} />
      <main className={styles.main}>{children}</main>
      {/*<Footer footerNav={footer} />*/}
    </div>
  );
};
