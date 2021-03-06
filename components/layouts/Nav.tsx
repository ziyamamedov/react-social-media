import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import styles from "../../styles/Nav.module.scss";

const Nav: React.FC = () => {
  const navItems = useSelector((store: RootState) => store.nav);
  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <Link href={item.url} key={item.id} passHref>
          <a className={styles.navLink}>{item.body}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
