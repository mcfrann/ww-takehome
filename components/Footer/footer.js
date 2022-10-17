import { useState, useEffect, useRef } from "react";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg";
import styles from "./footer.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Footer = ({ footer, parallax }) => {
  const {
    contactHeadline,
    contactEmail,
    phone,
    footerIcon,
    instagramLink,
    mailchimpLink,
  } = footer.fields;

  return <footer id="#footer" className={styles.footer}></footer>;
};
