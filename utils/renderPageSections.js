import { VisitSection } from "../components/VisitSection/visitSection";
import { MenuSection } from "../components/MenuSection/menuSection";
import { CareersSection } from "../components/CareersSection/careersSection";
import { AboutSection } from "../components/AboutSection/aboutSection";
import { ImageSection } from "../components/ImageSection/imageSection";

export const renderPageSections = (pageSections, orderButton) => {
  return pageSections.map((section, i) => {
    const { id } = section.sys.contentType.sys;

    if (id == "visitSection") {
      return <VisitSection key={`visit-section-${i}`} section={section} />;
    } else if (id == "aboutSection") {
      return <AboutSection section={section} key={`about-section-${i}`} />;
    } else if (id == "careersSection") {
      return <CareersSection section={section} key={`careers-section-${i}`} />;
    } else if (id == "menuSection") {
      return (
        <MenuSection
          section={section}
          orderButton={orderButton}
          key={`menu-section-${i}`}
          parallax={false}
        />
      );
    } else if (id == "imageSection") {
      return <ImageSection section={section} key={`image-section-${i}`} />;
    }
  });
};
