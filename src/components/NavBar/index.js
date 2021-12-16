import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "../BurgerMenu";
import { menuItems } from "./config";
import s from "./Styles.module.css";

const NavBar = (props) => {
  const location = useLocation();
  return (
    <>
      <nav
        className={`${s.nav} ${props.selectedItem && !props.showMenu && s.blackBG} ${
          props.showMenu && s.noBorders
        }`}
      >
        <BurgerMenu {...props} />
        {!props.showMenu && (
          <div className={`${s.navItems}`}>
            {(props.navItems || []).map((el) => (
              <a
                href={el.currentPageRef}
                className={`${s.navItem} ${
                  props.selectedItem === el.currentPageRef ? s.selected : ""
                }`}
                onClick={(e) => {
                  props.setSelectedItem(el.currentPageRef);
                }}
              >
                {el.label}
              </a>
            ))}
          </div>
        )}
      </nav>
      <nav></nav>
      {props.showMenu && (
        <div
          className={s.blurMenu}
          onClick={() => {
            props.setShowMenu((prev) => !prev);
          }}
        >
          <nav className={s.menuNav}>
            {menuItems.map((el) =>
              el.path ? (
                <Link
                  to={el.path}
                  className={`${s.link} ${el.path === location.pathname && s.bold}`}
                >
                  {el.title}
                </Link>
              ) : (
                <a
                  href="mailto:info@revelationfactory.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.link} ${el.path === location.pathname && s.bold}`}
                >
                  {el.title}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
