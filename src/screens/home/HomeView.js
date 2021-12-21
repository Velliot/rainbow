import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import s from "./Styles.module.css";
import h1 from "../../assets/videos/h1.mp4";
import door_h from "../../assets/videos/door_h.mp4";
import dragqueen_h from "../../assets/videos/dragqueen_h.mp4";
import bouncer_h from "../../assets/videos/bouncer_h.mp4";
import dragqueen_v from "../../assets/videos/dragqueen_v.mp4";
import bouncer from "../../assets/videos/bouncer.mp4";

import bouncer_mob from "../../assets/img/bouncer_h.gif";
import dragqueen_mob from "../../assets/img/dragqueen_h.gif";
import door_mob from "../../assets/img/door_h.gif";

import tiktok from "../../assets/img/tiktok.png";
import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";
import appstore from "../../assets/img/appstore.png";
import googleplay from "../../assets/img/googleplay.png";

const HomeView = () => (
  <div className={s.wrapper}>
    <nav className={`container ${s.nav}`}>
      <div className={s.block}>
        {!isMobile ? (
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
        ) : (
          <div className={s.imageWrapper}>
            <div id={s.videoHover}></div>
            <img src={bouncer_mob} className={`${s.image}`} alt="img" />
          </div>
        )}
        <Link to="/club-rules" className={s.link}>
          Club rules
        </Link>
      </div>
      <div className={`${s.block} ${s.horizontalBorder}`}>
        {isMobile ? (
          <div className={s.imageWrapper}>
            <div id={s.videoHover}></div>
            <img src={dragqueen_mob} className={`${s.image}`} alt="img" />
          </div>
        ) : (
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
        )}
        <Link to="/waitlist" className={s.link}>
          Get on waitlist
        </Link>
      </div>
      <div className={s.block}>
        {isMobile ? (
          <div className={s.imageWrapper}>
            <div id={s.videoHover}></div>
            <img src={door_mob} className={`${s.image}`} alt="img" />
          </div>
        ) : (
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
        )}
        <a
          href="mailto:info@revelationfactory.com"
          target="_blank"
          rel="noreferrer"
          className={s.link}
        >
          Contact
        </a>
      </div>
      <div className={s.linksWrapper}>
        <a href="https://vm.tiktok.com/ZM83BJB4X/" target={"_blank"} rel="noreferrer">
          <img className={s.linkItem} src={tiktok} alt="tiktok"></img>
        </a>{" "}
        <a href="https://Instagram.com/rnbwclub" target={"_blank"} rel="noreferrer">
          <img className={s.linkItem} src={instagram} alt="instagram"></img>
        </a>
        <a href="https://twitter.com/rnbwclub" target={"_blank"} rel="noreferrer">
          <img className={s.linkItem} src={twitter} alt="twitter"></img>
        </a>
        <a
          href="https://apps.apple.com/us/app/rnbw-club/id1581963996"
          target={"_blank"}
          rel="noreferrer"
        >
          <img alt="appstore" className={`${s.linkItem} ${s.store}`} src={appstore}></img>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.rnbw.app"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={googleplay} className={`${s.linkItem} ${s.store}`} alt="googleplay" />
        </a>
      </div>
    </nav>
  </div>
);

export default HomeView;
