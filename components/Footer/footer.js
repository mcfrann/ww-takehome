import { useState } from "react";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg";
import styles from "./footer.module.scss";

export const Footer = ({ footer, parallax }) => {
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

  const renderSocial = () => {
    return (
      <div className={styles.socials}>
        {instagramLink && (
          <a
            target="_blank"
            href={instagramLink}
            aria-label={instagramLink}
            title={instagramLink}
            rel="noreferrer"
          >
            <div className={styles.socialIconContianer}>
              <svg viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </div>
          </a>
        )}
      </div>
    );
  };
  return (
    <>
      <footer id="#footer" className={styles.footer}>
        <div className={styles.footerBody}>
          <h1 className={styles.headline}>{contactHeadline}</h1>
          {contactEmail && (
            <p className={styles.bodyText}>
              <a
                target="_blank"
                href={`mailto:${contactEmail}`}
                aria-label={contactEmail}
                title={contactEmail}
                rel="noreferrer"
              >
                {contactEmail}
              </a>
            </p>
          )}
          {phone && (
            <p className={styles.bodyText}>
              <a
                target="_blank"
                href={`tel:${phone}`}
                aria-label={phone}
                title={phone}
                rel="noreferrer"
              >
                {phone}
              </a>
            </p>
          )}

          {mailchimpLink && (
            <div className={styles.emailBody}>
              <h2 className={styles.emailText}>sign up for our email</h2>
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
            </div>
          )}
          <a
            className={styles.button}
            href="#"
            target="blank"
            aria-label="work-shop"
            title="work-shop"
          >
            <button className={styles.workShopButton}>WORK+SHOP</button>
          </a>
          {footerIcon && (
            <div className={styles.icon}>
              <div className={styles.footerIcon}>
                {footerIcon && <ImageOrSvg image={footerIcon} />}
              </div>
            </div>
          )}
          {!parallax && renderSocial()}
        </div>
        {parallax && (
          <div className={styles.parallaxFooter}>
            <div className={styles.socialContainer}>
              <div className={styles.followTitle}>
                <svg viewBox="0 0 216.9 70.3">
                  <path d="M10.8,57.3l6.2-6.8l1.8,1.6l-6.2,6.8l7.7,7.1l-2,2.2L1,52.3l9.4-10.2l1.6,1.9l-7.1,7.8L10.8,57.3z" />
                  <path d="M40.4,48.3c-4.6,3.3-9.8,1.1-14-4.8c-4.1-5.8-4.7-11.6-0.1-14.9c4.6-3.3,9.9-1,14.1,4.8    C44.5,39.2,45,45,40.4,48.3L40.4,48.3z M27.7,30.6c-3.2,2.3-2.5,6,1.1,11.1c3.7,5.1,7,6.8,10.1,4.5c3.2-2.3,2.6-5.9-1.1-11    C34.2,30.1,30.9,28.3,27.7,30.6z" />
                  <path d="M46.8,16.7l2.7-1.2l8.4,19.1l9.8-4.3l0.7,2.5l-12.2,5.4L46.8,16.7L46.8,16.7z" />
                  <path d="M74.3,6.6l2.9-0.6l4.3,20.4l10.5-2.2l0.2,2.6l-13,2.7L74.3,6.6z" />
                  <path d="M108.7,26.4c-5.7-0.1-8.5-4.9-8.4-12.2c0.1-7.1,3.1-12.1,8.8-12c5.7,0.1,8.5,5,8.4,12.3    C117.4,21.5,114.4,26.5,108.7,26.4z M109,4.6c-4-0.1-5.6,3.3-5.7,9.6c-0.1,6.3,1.5,9.6,5.4,9.7c4,0.1,5.6-3.3,5.7-9.5    C114.5,8.2,113,4.7,109,4.6L109,4.6z" />
                  <path d="M139.3,29.8l-3.8-0.8l1-17.9l-6.3,16.8l-3.9-0.8l1.6-23.7l2.9,0.6l-1.7,20.3l6.4-16.6l3.5,0.7l-1,17.7    L144.9,7l2.7,0.6L139.3,29.8L139.3,29.8z" />
                  <path d="M187.9,46.4c-2.8,3.9-7.1,4.7-11,1.9c-3.9-2.8-4.4-7.1-1.6-11l9.3-12.9l2.4,1.7l-9.3,13    c-2.1,2.9-1.7,5.3,0.8,7.1c2.5,1.8,4.9,1.4,7-1.5l9.3-13l2.4,1.8L187.9,46.4L187.9,46.4z" />
                  <path d="M194.7,64.1c-2.3-2.5-3.5-5.3-3.4-8.1l2.7,0c0,2.2,0.6,4.4,2.5,6.5c1.9,2.1,4.7,3.1,6.9,1.1    c1.7-1.5,1.8-3.1-0.1-6.9c-2.1-4.4-2.8-7.6-0.1-10.2c2.6-2.4,6.6-1.8,9.6,1.5c2.2,2.4,3,4.7,3.1,7.4h-2.6c0-2.2-0.9-4.1-2.2-5.6    c-1.8-1.9-4-2.7-5.7-1.1c-1.5,1.4-1.3,3.1,0.8,7.3c1.7,3.4,2.7,6.8-0.5,9.8C202.6,68.5,198.4,68.1,194.7,64.1L194.7,64.1z" />
                </svg>
              </div>
              {renderSocial()}
            </div>
          </div>
        )}
      </footer>
    </>
  );
};
