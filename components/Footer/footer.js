import { useState } from "react";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg";
import styles from "./footer.module.scss";

export const Footer = ({ footer }) => {
  const {
    contactHeadline,
    contactEmail,
    phone,
    footerIcon,
    instagramLink,
    mailchimpLink,
  } = footer.fields;
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div id="#footer" className={styles.footer}>
      <div className={styles.footerBody}>
        <h1 className={styles.headline}>{contactHeadline}</h1>
        <p className={styles.bodyText}>{contactEmail}</p>
        <p className={styles.bodyText}>{phone}</p>

        <div className={styles.emailBody}>
          <h2 className={styles.bodyText}>sign up for our email</h2>
          <form onSubmit={submitHandler} className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <div>
              <input
                value={email}
                placeholder="youremail@email.com"
                type="email"
                required
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">SUBMIT</button>
            </div>
          </form>

          <button className={styles.workShopButton}>WORK+SHOP</button>
        </div>
      </div>
      <div className={styles.icon}>
        <div className={styles.footerIcon}>
          {footerIcon && <ImageOrSvg image={footerIcon} />}
        </div>
      </div>
      <div className={styles.socials}>
        <a target="_blank" href={mailchimpLink} rel="noreferrer"></a>
        <a target="_blank" href={instagramLink} rel="noreferrer"></a>
      </div>
    </div>
  );
};
