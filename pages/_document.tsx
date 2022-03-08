import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head >
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Sansita+Swashed:wght@300&family=Syne+Mono&display=swap" rel="stylesheet" />
            </Head>
            <body className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}