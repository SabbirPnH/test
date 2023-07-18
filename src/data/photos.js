const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (fileName) =>
  `assets/img/portfolio/${fileName}`;

const rawPhotoDetails = [
  {
    fileName: "app-1.jpg",
    name: "App 1",
    category: "app",
    width: 1080,
    height: 768
  },
  {
    fileName: "product-1.jpg",
    name: "Product 1",
    category: "product",
    width: 1080,
    height: 768
  },
  {
    fileName: "branding-1.jpg",
    name: "Branding 1",
    category: "branding",
    width: 1080,
    height: 768
  },
  {
    fileName: "books-1.jpg",
    name: "Books 1",
    category: "books",
    width: 1080,
    height: 768
  },
  {
    fileName: "app-2.jpg",
    name: "App 2",
    category: "app",
    width: 1080,
    height: 768
  },
  {
    fileName: "product-2.jpg",
    name: "Product 2",
    category: "product",
    width: 1080,
    height: 768
  },
  {
    fileName: "branding-2.jpg",
    name: "Branding 2",
    category: "branding",
    width: 1080,
    height: 768
  },
  {
    fileName: "books-2.jpg",
    name: "Books 2",
    category: "books",
    width: 1080,
    height: 768
  },
  {
    fileName: "app-3.jpg",
    name: "App 3",
    category: "app",
    width: 1080,
    height: 768
  },
  {
    fileName: "product-3.jpg",
    name: "Product 3",
    category: "product",
    width: 1080,
    height: 768
  },
  {
    fileName: "branding-3.jpg",
    name: "Branding 3",
    category: "branding",
    width: 1080,
    height: 768
  },
  {
    fileName: "books-3.jpg",
    name: "Books 3",
    category: "books",
    width: 1080,
    height: 768
  },
];

const photos = rawPhotoDetails.map((photo, index) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: unsplashLink(photo.fileName),
    key: `${index}`,
    alt: photo.name,
    category: photo.category,
    width,
    height,
    // images: breakpoints.map((breakpoint) => {
    //   const breakpointHeight = Math.round((height / width) * breakpoint);
    //   return {
    //     src: unsplashLink(photo.fileName),
    //     width: breakpoint,
    //     height: breakpointHeight
    //   };
    // })
  };
});

export default photos;
