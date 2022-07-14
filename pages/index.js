import styles from "../styles/Home.module.scss";
import { Layout } from "../components/Layout/layout";
import { IntroSection } from "../components/IntroSection/introSection";
import { renderPageSections } from "/utils/renderPageSections";
import {
  getPage,
  getAnnoucementBar,
  getFooterNavLinks,
  getHeaderNavLinks
} from "../utils/contentful-client";

import { Element } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";

export default function Home({
  homePageContent,
  footer,
  header,
  announcementBar
}) {
  const { pageTitle, pageMetadata, introSection, pageSections } =
    homePageContent.fields;

  const { orderButton } = header.fields;

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          scrub: true,
          pin: true,
          pinSpacing: false,
        }
      });
    });
  }, []);

  return (
    <Layout
      title={pageTitle ? pageTitle : "Work Shop Title"}
      metaDescription={pageMetadata ? pageMetadata : "Metadata goes here"}
      id="home"
      announcementBar={announcementBar}
      header={header}
      footer={footer}>
      <div className={styles.container}>
        {introSection && (
          <Element name="introSection">
            <IntroSection section={introSection} />
          </Element>
        )}
        {pageSections && renderPageSections(pageSections, orderButton)}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const homePageContent = (await getPage("7fnZw0wL2N6MMvqv8aJG2F")) ?? [];

  const footerNav = (await getFooterNavLinks()) ?? [];
  const footer = footerNav ? footerNav.items[0] : [];

  const headerNav = (await getHeaderNavLinks()) ?? [];
  const header = headerNav ? headerNav.items[0] : [];

  const announcement = (await getAnnoucementBar()) ?? [];
  const announcementBar = announcement ? announcement.items[0] : [];

  return {
    props: {
      homePageContent,
      header,
      footer,
      announcementBar
    },
    revalidate: 120
  };
};
