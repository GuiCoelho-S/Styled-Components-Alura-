import darkMode from "../../assets/icons/dark_mode.png";
import lightMode from "../../assets/icons/light_mode.png";
import { Icon } from "../../UI/icon";

const light = <Icon src={lightMode} alt="light Mode" />;
const dark = <Icon src={darkMode} alt="dark Mode" />;

export default ({theme}) => (theme ? dark : light ) 