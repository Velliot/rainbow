import { NavBar } from "../../components";
import s from "./Styles.module.css";

const WaitlistView = (props) => {
  return (
    <div className="container">
      {<NavBar {...props} />}
      <div className={`${s.wrapper} ${props.showMenu && s.blured}`}></div>
    </div>
  );
};

export default WaitlistView;
