import Document, { Html, Head, Main, NextScript } from 'next/document'
// import Script from 'next/Script'

class MyDocument extends Document {
  static async genInitialPropos(ctx) {
    const initialPropos = await Document.genInitialPropos(ctx)
    return { ...initialPropos }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          {/* <link href="assets/vendor/aos/aos.css" rel="stylesheet" /> */}
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

          <link href="assets/css/variables-orange.css" rel="stylesheet" />
          <link href="assets/css/main.css" rel="stylesheet" />
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        </Head >
        <body>
          <Main />
          <NextScript />

        {/* <Script type="text/javascript" src="assets/vendor/aos/aos.js" /> */}
        {/* <script type="text/javascript" src="assets/vendor/glightbox/js/glightbox.min.js" ></script> */}
         {/* <Script type="text/javascript" src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script type="text/javascript" src="assets/vendor/swiper/swiper-bundle.min.js" />
        <Script type="text/javascript" src="assets/js/main.js" /> */}
        {/* <script type="text/javascript" src="assets/js/main.js"></script> */}

        </body>
      </Html>
    )
  }
}
export default MyDocument;