import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <>
      
       <div>
       {children}
       </div>
        <Footer/>
      </>
    </div>
  );
};

export default Layout;
