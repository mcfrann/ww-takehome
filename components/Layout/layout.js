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
      </Head>

      <Header
        headerNav={header}
        footerNav={footer}
        announcementBar={announcementBar}
      />
      <main className={styles.main}>{children}</main>
      <Footer footer={footer} />
    </div>
  );
};
