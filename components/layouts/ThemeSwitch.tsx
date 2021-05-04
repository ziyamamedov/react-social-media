import { Switch } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/actions";
import { RootState } from "../../Redux/reducers";
import styles from "../../styles/Layout.module.scss";

const handleChange = (dispatch) => {
  dispatch(toggleTheme());
};

const ThemeSwitch: React.FC = () => {
  const isDarkTheme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className={styles.switchWrapper}>
      <WbSunnyIcon />
      <Switch
        checked={isDarkTheme}
        onChange={handleChange.bind(null, dispatch)}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Brightness3Icon />
    </div>
  );
};

export default ThemeSwitch;
