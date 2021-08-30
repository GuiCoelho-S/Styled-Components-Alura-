import darkMode from "../../assets/icons/dark_mode.png";
import lightMode from "../../assets/icons/light_mode.png";
import { Icon } from "../../UI/icon";

const light = <Icon src={lightMode} alt="light Mode" />;
const dark = <Icon src={darkMode} alt="dark Mode" />;

const SwitchTheme = ({ theme }) => (theme ? dark : light);
export default SwitchTheme;
