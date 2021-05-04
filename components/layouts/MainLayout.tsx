import Head from "next/head";
import styles from "../../styles/Layout.module.scss";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";

export interface MainLayoutProps {
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  const isDarkTheme = useSelector((state: RootState) => state.theme);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="description"
          content="Social media site made using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.wrapper} ${isDarkTheme && styles.dark}`}>
        <Header></Header>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <Nav />
          </aside>
          <main className={styles.main}>{children}</main>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
