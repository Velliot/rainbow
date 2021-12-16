import s from "./Styles.module.css";

const BurgerMenu = ({ showMenu, setShowMenu }) => (
  <div
    className={`${s.burgerWrapper} ${showMenu ? s.noBorders : ""}`}
    onClick={() => {
      setShowMenu((prev) => !prev);
    }}
  >
    <span className={`${s.line} ${showMenu ? s.firstLine : ""}`} />
    <div className={s.div}></div>
    <span className={`${s.line} ${showMenu ? s.secondLine : ""}`} />
  </div>
);

export default BurgerMenu;
