import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Image
        src={process.env.NEXT_PUBLIC_URL + "/img/bg-hero.svg"}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <Component {...pageProps} />

    </div>
  );
}

export default MyApp;
