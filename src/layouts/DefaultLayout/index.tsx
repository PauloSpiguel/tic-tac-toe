import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./styles.module.scss";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
