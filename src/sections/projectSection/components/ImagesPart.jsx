/* eslint-disable react/prop-types */
import { useEffect } from "react";

const ImagesPart = ({ images, name }) => {
  useEffect(() => {
    const copy = document
      .querySelector(".projectImageCarouselChild")
      .cloneNode(true);
    document.querySelector(".projectImageCarouselContainer").appendChild(copy);
  }, []);

  return (
    <div className="projectImageCarouselContainer h-40 flex">
      <div
        className="projectImageCarouselChild flex animate-projectSlideAnimation"
        style={{
          width: `calc(18rem * ${images.length})`,
        }}
      >
        {images.map((image) => {
          return (
            <div
              key={image}
              style={{
                backgroundImage: `url('./projects/${name.toLowerCase()}/${image}')`,
              }}
              className="h-40 w-72 bg-center bg-no-repeat bg-cover"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImagesPart;
