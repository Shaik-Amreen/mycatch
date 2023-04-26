import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>MyCatch</title>
        <meta
          name="description"
          content="mycatch"
        />
      </Head>
    
      <Intro />
   <Footer/>
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
