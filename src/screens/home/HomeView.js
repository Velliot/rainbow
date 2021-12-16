import { Link } from "react-router-dom";
import s from "./Styles.module.css";
import h1 from "../../assets/videos/h1.mp4";

const HomeView = () => (
  <div className={s.wrapper}>
    <div
      className={`${s.videoTag}`}
      dangerouslySetInnerHTML={{
        __html: `
        <video  id="${s.video}" className="${s.video}" autoPlay muted playsinline webkit-playsinline>
        <source src="${h1}" type="video/mp4" />
      </video>`,
      }}
    />
    <nav className={`container ${s.nav}`}>
      <div className={s.block}>
        <Link to="/club-rules" className={s.link}>
          Club rules
        </Link>
      </div>
      <div className={`${s.block} ${s.horizontalBorder}`}>
        <Link to="/waitlist" className={s.link}>
          Get on waitlist
        </Link>
      </div>
      <div className={s.block}>
        <a
          href="mailto:info@revelationfactory.com"
          target="_blank"
          rel="noreferrer"
          className={s.link}
        >
          Contact
        </a>
      </div>
    </nav>
  </div>
);

export default HomeView;
