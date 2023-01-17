import { Html, Head, Main, NextScript } from 'next/document';

export default function Document()
{
  return (
    <Html>
      <Head>
        <meta 
          name='description'
          content='GuitarLA - Venta de Guitarras y Blog de Musica'
        />

        {/* ** Google Font Family ** */}
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          crossOrigin="true"
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" 
        />
        {/* ** Google Font Family ** */}

        {/* ** Normalice ** */}
        <link 
          rel="stylesheet" 
          href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" 
        />
        {/* ** Normalice ** */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}