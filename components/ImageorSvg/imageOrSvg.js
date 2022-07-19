import Image from "next/image";
import { ReactSVG } from "react-svg";

export const ImageOrSvg = (image) => {
  const alt = image.image?.fields.title || "no alt description";
  let details = image.image?.fields.file.details.image;
  const src = `https:${image.image?.fields.file.url}`;
  let height = details?.height;
  let width = details?.width;
  const svg = image.image?.fields.file.contentType == "image/svg+xml";

  if (svg) {
    return (
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add(`svg`);
          svg.removeAttribute('id');
          const tagG = svg.getElementsByTagName('g');
          for (let index = 0; index < tagG.length; index++) {
            tagG.item(index).removeAttribute('id');
          }
        }}
        src={src}
      />
    );
  } else {
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
};
