import Head from "next/head";

export const siteTitle = "WordSafe - Keep your words safe";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/cadenas.ico" />
        <meta
          name="description"
          content="Generate your password the easy way"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </>
  );
}
