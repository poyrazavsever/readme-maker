import "@/styles/globals.css";
import Layout from "@/Layout/layout";

export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
