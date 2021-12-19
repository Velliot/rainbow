import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import s from "./Styles.module.css";
import h1 from "../../assets/videos/h1.mp4";
import door_h from "../../assets/videos/door_h.mp4";
import dragqueen_h from "../../assets/videos/dragqueen_h.mp4";
import dragqueen_v from "../../assets/videos/dragqueen_v.mp4";
import bouncer_h from "../../assets/videos/bouncer_h.mp4";
import bouncer from "../../assets/videos/bouncer.mp4";

const HomeView = () => (
  <div className={s.wrapper}>
    {/* <div
      className={`${s.videoTag}`}
      dangerouslySetInnerHTML={{
        __html: `
        <video  id="${s.video}" className="${s.video}" autoPlay muted playsinline webkit-playsinline>
        <source src="${h1}" type="video/mp4" />
      </video>`,
      }}
    /> */}
    <nav className={`container ${s.nav}`}>
      <div className={s.block}>
        <div
          className={`${s.videoTag}`}
          dangerouslySetInnerHTML={{
            __html: `
            <div id="${s.videoHover}"></div>
        <video  id="${s.video}" className="${
              s.video
            }"  autoPlay loop muted playsinline webkit-playsinline>
        <source src="${isMobile ? bouncer_h : bouncer}" type="video/mp4" />
      </video>`,
          }}
        />
        <Link to="/club-rules" className={s.link}>
          Club rules
        </Link>
      </div>
      <div className={`${s.block} ${s.horizontalBorder}`}>
        <div
          className={`${s.videoTag}`}
          dangerouslySetInnerHTML={{
            __html: `
            <div id="${s.videoHover}"></div>
        <video  id="${s.video}" className="${
              s.video
            }"  autoPlay loop muted playsinline webkit-playsinline>
        <source src="${isMobile ? dragqueen_h : dragqueen_v}" type="video/mp4" />
      </video>`,
          }}
        />
        <Link to="/waitlist" className={s.link}>
          Get on waitlist
        </Link>
      </div>
      <div className={s.block}>
        <div
          className={`${s.videoTag}`}
          dangerouslySetInnerHTML={{
            __html: `
            <div id="${s.videoHover}"></div>
        <video  id="${s.video}" className="${
              s.video
            }"  autoPlay loop muted playsinline webkit-playsinline>
        <source src="${isMobile ? door_h : h1}" type="video/mp4" />
      </video>`,
          }}
        />
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
