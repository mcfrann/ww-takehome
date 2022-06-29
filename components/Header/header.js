import styles from "./header.module.scss";
import Link from "next/link";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg.js";

import { useState } from "react";

export const Header = ({ headerNav, footerNav }) => {
  const { logo, orderButton, headerSectionLinks } = headerNav.fields;
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    if (showDrawer) {
      setShowDrawer(false);
    } else {
      setShowDrawer(true);
    }
  };

  const renderLogoContainer = () => {
    return (
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
          <a className={styles.logoLink}>
            <ImageOrSvg image={logo} />
          </a>
        </Link>
      </div>
    );
  };

  const renderNavLinks = (start, stop) => {
    // Print the nav links here
  };

  const renderOrderButton = () => {
    return <div className={styles.navLink}>ORder button here</div>;
  };

  return (
    <header className={styles.header}>
      <div
        className={`${styles.mobileNavigation} ${
          showDrawer ? `${styles.opened}` : `${styles.closed}`
        } `}
      >
        {renderLogoContainer()}
        <div className={styles.hamburger} onClick={() => toggleDrawer()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`${styles.drawer} ${
          showDrawer ? `${styles.opened}` : `${styles.closed}`
        }`}
      >
        <div className={styles.navContainerMobile}>{renderNavLinks(1, 3)}</div>
      </div>
      <nav className={styles.navContainer}>
        {renderNavLinks(0, 2)}
        {renderLogoContainer()}
        {renderNavLinks(3)}
        {renderOrderButton()}
      </nav>
    </header>
  );
};
