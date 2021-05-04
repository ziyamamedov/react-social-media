import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import styles from "../../styles/Layout.module.scss";
import ThemeSwitch from "./ThemeSwitch";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const isDarkTheme = useSelector((state: RootState) => state.theme);
  return (
    <header className={`${styles.header} ${isDarkTheme && styles.darkHeader}`}>
      <div>Logo</div>
      <div>Search bar</div>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
