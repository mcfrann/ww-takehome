import styles from "./layout.module.scss";
import Head from "next/head";
import { Header } from "../Header/header.js";

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
  return (
    <div className={styles.container} id={id}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wlo5gtv.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header
        headerNav={header}
        footerNav={footer}
        announcementBar={announcementBar}
      />
      <main className={styles.main}>{children}</main>
      <Footer footer={footer} parallax={true} />
    </div>
  );
};
