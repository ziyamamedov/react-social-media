import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import styles from "../../styles/Layout.module.scss";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const isDarkTheme = useSelector((state: RootState) => state.theme);

  return (
    <footer className={`${styles.footer} ${isDarkTheme && styles.darkFooter}`}>
      <h2>Footer</h2>
    </footer>
  );
};

export default Footer;
