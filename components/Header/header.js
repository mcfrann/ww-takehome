import styles from "./header.module.scss";

import { ImageOrSvg } from "../ImageorSvg/imageOrSvg.js";
import { AnnouncementBar } from "../AnnouncementBar/announcementBar.js";
import { useState } from "react";
import { Link } from "react-scroll";

export const Header = ({ headerNav, footerNav, announcementBar }) => {
  const { logo, orderButton, headerSectionLinks } = headerNav.fields;
  const [showDrawer, setShowDrawer] = useState(false);

  const { display, headline, linkUrl } = announcementBar.fields;
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const toggleDrawer = () => {
    if (showDrawer) {
      setShowDrawer(false);
    } else {
      setShowDrawer(true);
    }
  };

  const handleSetActive = (to) => {};

  const renderLogoContainer = () => {
    const alt = logo.fields.title || "no alt description";
    return (
      <div className={styles.logoContainer}>
        <Link
          className={styles.logoLink}
          activeClass="active"
          to={"introSection"}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onSetActive={() => handleSetActive}
        >
          <ImageOrSvg image={logo} />
        </Link>
      </div>
    );
  };

  const renderNavLinks = (start, stop) => {
    return headerSectionLinks.map((link, index) => {
      if (index < start || index > stop) return;
      return (
        <Link
          activeClass="active"
          to={link.fields.menuTitle}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={() => handleSetActive}
          key={index}
          onClick={() => toggleDrawer()}
        >
          {link.fields.menuTitle}
        </Link>
      );
    });
  };

  const renderOrderButton = () => {
    return (
      <a
        href={orderButton.fields.buttonLinkUrl}
        target={orderButton.fields.openInNewWindow ? "_blank" : "_self"}
        rel="noreferrer"
        className={styles.orderButton}
      >
        {orderButton.fields.buttonTitle}
      </a>
    );
  };

  const ConditionalHeader = () => {
    const totalHeaderLinks =
      headerSectionLinks.length + (orderButton.fields ? 1 : 0);
    if (totalHeaderLinks === 4) {
      return (
        <div className={styles.nav}>
          <div className={styles.navGroup}>{renderNavLinks(0, 1)}</div>
          {renderLogoContainer()}
          <div className={styles.navGroup}>
            {renderNavLinks(2, 3)}
            {renderOrderButton()}
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.navAlternate}>
          {renderLogoContainer()}
          {renderNavLinks()}
          {renderOrderButton()}
        </div>
      );
    }
  };

  return (
    <div
      className={`${styles.header} ${
        headline && display && !showAnnouncement ? `${styles.hidden}` : ""
      }`}
    >
      {headline && display && (
        <AnnouncementBar
          headline={headline}
          url={linkUrl}
          hide={() => setShowAnnouncement(false)}
          isHidden={!showAnnouncement}
        />
      )}
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
        {renderOrderButton()}
      </div>
      <div
        className={`${styles.drawer} ${
          showDrawer ? `${styles.opened}` : `${styles.closed}`
        }`}
      >
        <div className={styles.navContainerMobile}>{renderNavLinks(0, 3)}</div>
      </div>
      <nav className={styles.navContainer}>
        <ConditionalHeader />
      </nav>
    </div>
  );
};
