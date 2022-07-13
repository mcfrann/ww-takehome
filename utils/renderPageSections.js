import { VisitSection } from "../components/VisitSection/visitSection";
import { MenuSection } from "../components/MenuSection/menuSection";
import { CareersSection } from "../components/CareersSection/careersSection";
import { AboutSection } from "../components/AboutSection/aboutSection";
import { ImageSection } from "../components/ImageSection/imageSection";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const renderPageSections = (pageSections, orderButton) => {
  return pageSections.map((section, i) => {
    const { id } = section.sys.contentType.sys;

    if (id == "visitSection") {
      return (
        <Element name={section.fields.menuTitle} key={`section-${i}`}>
          <VisitSection key={`visit-section-${i}`} section={section} />
        </Element>
      );
    } else if (id == "aboutSection") {
      return (
        <Element name={section.fields.menuTitle} key={`section-${i}`}>
          <AboutSection section={section} key={`about-section-${i}`} />
        </Element>
      );
    } else if (id == "careersSection") {
      return (
        <Element name={section.fields.menuTitle} key={`section-${i}`}>
          <CareersSection section={section} key={`careers-section-${i}`} />
        </Element>
      );
    } else if (id == "menuSection") {
      return (
        <Element name={section.fields.menuTitle} key={`section-${i}`}>
          <MenuSection
            section={section}
            orderButton={orderButton}
            key={`menu-section-${i}`}
            parallax={false}
          />
        </Element>
      );
    } else if (id == "imageSection") {
      return (
        <ImageSection
          section={section}
          key={`image-section-${i}`}
          key={`section-${i}`}
        />
      );
    }
  });
};
