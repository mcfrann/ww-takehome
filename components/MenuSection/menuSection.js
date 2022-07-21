import React from "react";
import styles from "./menu.module.scss";
import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const MenuSection = ({ section, orderButton, parallax }) => {
  const {
    menuImage,
    parallaxIconOne,
    menuTitle,
    foodHighlights,
    headline,
    menuDownloadLink,
  } = section.fields;

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#menu .parallax",
      {
        rotate: (i, target) => (target.dataset.index % 2 ? "20" : "-20"),
        y: "10rem",
      },
      {
        y: "-10rem",
        rotate: (i, target) => (target.dataset.index % 2 ? "-20" : "20"),
        scrollTrigger: {
          trigger: "#menu .parallax",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id={menuTitle} className={styles.menuSection}>
      {headline && <div className={styles.buttonHeadline}>{headline}</div>}
      {menuDownloadLink && (
        <a
          href={menuDownloadLink.fields.buttonLinkUrl}
          download
          className={styles.menuDownloadLink}
        >
          <button className={styles.downloadButton}>
            {menuDownloadLink.fields.buttonTitle.toUpperCase()}
          </button>
        </a>
      )}
      {menuImage && (
        <div className={styles.menuEmbedImage}>
          <ImageOrSvg image={menuImage} />
        </div>
      )}
      {foodHighlights && (
        <div className={styles.foodHighlights} ref={foodHighlights}>
          {foodHighlights.map((food, index) => {
            const icon = food.fields.icon;
            const iconDetails = icon.fields.file.details.image;
            const wide = iconDetails.width > iconDetails.height;
            return (
              <div key={index} className={styles.food}>
                <span className={styles.text}>
                  <div
                    className={`${styles.icon} ${
                      index % 2 === 1 ? styles.left : styles.right
                    } ${wide && styles.wide} parallax`}
                    data-index={index}
                  >
                    <ImageOrSvg image={food.fields.icon} />
                  </div>
                  {food.fields.title}
                </span>
              </div>
            );
          })}
        </div>
      )}
      {!parallax && (
        <div className={styles.menuFooter}>
          <div className={styles.iconsContainer}>
            {parallaxIconOne && (
              <div className={styles.parallaxIconOne}>
                <ImageOrSvg image={parallaxIconOne} />
              </div>
            )}
          </div>
          {orderButton && (
            <a
              href={orderButton.fields.buttonLinkUrl}
              target={orderButton.fields.openInNewWindow ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <div className={styles.orderButton}>
                <svg viewBox="0 0 185.6 187.9" className={styles.orderNowText}>
                  <path d="M23.9,137.9c3.2-2.3,6.1-2.5,8.1,0.2c1.9,2.7,0.9,5.3-2.3,7.6c-3.2,2.3-6.1,2.5-8.1-0.2   C19.6,142.8,20.7,140.2,23.9,137.9z M28.5,144.2c1.7-1.2,3.7-3,2.2-5.2c-1.6-2.2-4-0.8-5.6,0.4c-1.7,1.2-3.7,3-2.1,5.2   C24.5,146.8,26.8,145.4,28.5,144.2z" />
                  <path d="M39.2,147.2l2.4,2.1c2.3,2.1,2.9,4.4,1.2,6.2c-1.3,1.5-3.1,1.6-4.6,0.7l-0.5,6.2l-1.7-1.5l0.5-5.7l-1.2-1.1   l-3.1,3.4l-1.3-1.2L39.2,147.2L39.2,147.2z M36.4,153l1,0.9c1.7,1.6,3,1.5,3.9,0.4c0.9-1,0.9-2.3-0.8-3.9l-1-0.9L36.4,153z" />
                  <path d="M51.3,157l3.1,1.8c3.5,2,3.1,4.8,1.3,7.8c-1.8,3.1-4.2,4.8-7.6,2.8l-3.1-1.8L51.3,157L51.3,157z M47.4,167.2   l1.5,0.9c2.6,1.5,4.1-0.6,5.1-2.3c1-1.7,2.1-4.1-0.5-5.6l-1.5-0.9L47.4,167.2L47.4,167.2z" />
                  <path d="M65.1,164.3l7.6,2.6l-0.5,1.5l-5.9-2l-1.2,3.5l5.1,1.7l-0.5,1.5l-5.1-1.7l-1.3,3.7l5.9,2l-0.5,1.5l-7.6-2.6   L65.1,164.3L65.1,164.3z" />
                  <path d="M80.1,168.5l3.2,0.4c3.1,0.4,4.9,1.9,4.6,4.3c-0.2,2-1.6,3.1-3.4,3.3l3.2,5.3l-2.2-0.3l-2.8-5l-1.6-0.2   l-0.6,4.5l-1.8-0.2L80.1,168.5z M81.1,174.9l1.4,0.2c2.3,0.3,3.3-0.5,3.5-1.9c0.2-1.4-0.6-2.4-2.9-2.7l-1.4-0.2L81.1,174.9z" />
                  <path d="M111.9,173.7c-1.1-3.8-0.3-6.6,2.8-7.6c3.2-0.9,5.3,0.9,6.4,4.7c1.1,3.8,0.3,6.6-2.9,7.5   C115.1,179.3,113,177.4,111.9,173.7L111.9,173.7z M119.4,171.4c-0.6-2-1.6-4.5-4.2-3.8c-2.6,0.8-2.1,3.5-1.5,5.5   c0.6,2,1.6,4.5,4.2,3.8C120.5,176.1,119.9,173.4,119.4,171.4z" />
                  <path d="M125.8,162.3l2.1-1.2l8.4,7.4l-1.8-3l-3.3-6.2l1.4-0.8l5.8,10.8l-2.1,1.1l-8.4-7.4l1.8,3l3.3,6.2l-1.4,0.8   L125.8,162.3z" />
                  <path d="M139,154.2l1.4-1.2l6.9,8.2l4.8-4.1l1,1.2l-6.2,5.2L139,154.2L139,154.2z" />
                  <path d="M158.9,150.2l1.8-2.4l-7.2-5.7l-1.9,2.4l-1.2-1l4.8-6.1l1.2,1l-1.8,2.3l7.2,5.7l1.8-2.3l1.2,1l-4.8,6.1   L158.9,150.2L158.9,150.2z" />
                  <path d="M159.4,130.7l1.1-2.2l11.1,1.2l-3.2-1.4l-6.3-3.1l0.7-1.5l11,5.5l-1.1,2.2l-11.1-1.2l3.2,1.4l6.3,3.1l-0.7,1.5   L159.4,130.7z" />
                  <path d="M165.5,116.5l2-7.7l1.5,0.4l-1.6,6l3.6,0.9l1.3-5.2l1.5,0.4l-1.3,5.2l3.8,1l1.6-6l1.5,0.4l-2,7.7L165.5,116.5   L165.5,116.5z" />
                  <path d="M11.9,87.1c-4.1-0.6-6.1-2.7-5.7-6c0.3-2.1,1.5-4.3,4.8-3.9l-0.2,1.7c-1.8-0.1-2.8,0.8-3,2.5   c-0.4,2.7,2,3.5,4.4,3.8c2.2,0.3,4.8,0.2,5.1-2.5c0.3-1.8-0.4-2.8-2.2-3.2l0.2-1.7c3.1,0.5,3.8,2.9,3.5,5.2   C18.4,86.4,15.9,87.7,11.9,87.1L11.9,87.1z" />
                  <path d="M9.5,67.5l0.6-1.7l10.1,3.7l2.1-5.9l1.5,0.5l-2.8,7.6L9.5,67.5z" />
                  <path d="M25.8,56.5l1.6-2.6l-7.8-4.8L18,51.7l-1.3-0.8l4.1-6.6l1.3,0.8l-1.6,2.5l7.8,4.8l1.6-2.5l1.3,0.8l-4.1,6.6   L25.8,56.5z" />
                  <path d="M31,41c-3-2.9-3.4-5.7-1.1-8.1c1.5-1.5,3.8-2.6,6.2-0.4l-1.2,1.3c-1.4-1.1-2.8-1-3.9,0.2c-1.9,2-0.4,4,1.3,5.7   c1.6,1.6,3.7,3,5.6,1c1.3-1.3,1.3-2.5,0.1-3.9l1.2-1.3c2.2,2.3,1.4,4.6-0.1,6.2C36.7,44.1,33.9,43.7,31,41L31,41z" />
                  <path d="M40.5,23.6l1.5-1l3.3,4.8l0.9-7.6l1.8-1.2L47,25.4l8.2,3l-1.9,1.3l-6.6-2.6l-0.3,2.1l2.4,3.5l-1.5,1L40.5,23.6   L40.5,23.6z" />
                  <path d="M73.5,8.3l1.8-0.3l0.9,5.2l4.1-0.7l-0.9-5.2L81.1,7l2.1,12.1l-1.8,0.3l-0.9-5.4l-4.1,0.7l0.9,5.4l-1.8,0.3   L73.5,8.3L73.5,8.3z" />
                  <path d="M91.3,6.1l8,0.2l0,1.5l-6.2-0.1L93,11.4l5.4,0.1l0,1.5l-5.4-0.1l-0.1,3.9L99,17l0,1.5l-8-0.2L91.3,6.1   L91.3,6.1z" />
                  <path d="M109.4,7.6l3.1,0.7c3.1,0.7,4.7,2.4,4.1,4.8c-0.5,1.9-2,2.9-3.7,2.9l2.6,5.6l-2.2-0.5l-2.3-5.2l-1.6-0.4   l-1.1,4.4l-1.8-0.4L109.4,7.6L109.4,7.6z M109.7,14l1.4,0.3c2.2,0.5,3.3-0.2,3.7-1.5c0.3-1.3-0.3-2.5-2.6-3l-1.4-0.3L109.7,14z" />
                  <path d="M126.8,12.8l7.2,3.4l-0.7,1.4l-5.6-2.6l-1.6,3.3l4.9,2.3l-0.7,1.4l-4.9-2.3l-1.7,3.6l5.6,2.6l-0.7,1.4   l-7.2-3.4L126.8,12.8L126.8,12.8z" />
                  <path d="M157.3,36.5l-2.7-3.1l1.2-1l6.7,7.6l-1.2,1l-2.7-3.1l-8.1,7.1l-1.2-1.4L157.3,36.5z" />
                  <path d="M161.8,49.8c3.5-1.9,6.4-1.8,8,1.1c1.6,2.9,0.2,5.3-3.2,7.3c-3.5,1.9-6.4,1.8-8-1.1   C157,54.2,158.4,51.7,161.8,49.8z M165.6,56.6c1.8-1,4.1-2.6,2.8-4.9c-1.3-2.4-3.8-1.2-5.6-0.2c-1.8,1-4.1,2.6-2.7,4.9   C161.3,58.7,163.8,57.6,165.6,56.6L165.6,56.6z" />
                </svg>
                {orderButton.fields.buttonTitle}
              </div>
            </a>
          )}
        </div>
      )}
    </section>
  );
};
