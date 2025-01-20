import photos from "./photos";

export const slides = photos.map(
  ({ src, key, alt, category, width, height, images }) => ({
    src,
    key,
    alt,
    category,
    width,
    height,
    srcSet: images?.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
  })
);

export default slides;
