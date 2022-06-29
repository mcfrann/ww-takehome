import styles from "./header.module.scss";
import Link from "next/link";
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

  const renderLogo = () => {
    if (logo) {
      const alt = logo.fields.title || "no alt description";
      let details = logo.fields.file.details.image;
      const src = `https:${logo.fields.file.url}`;
      let height = details.height;
      let width = details.width;

      return (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout={"intrinsic"}
          objectFit={"contain"}
        />
      );
    }
    return;
  };

  const renderLogoContainer = () => {
    return (
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
          <a className={styles.logoLink}>{renderLogo()}</a>
        </Link>
      </div>
    );
  };

  const renderNavLinks = (start, stop) => {
    // Print the nav links here
  };

  renderOrderButton = () => {
    return <div className={styles.navLink}>// ORder button here</div>;
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
