import s from "./Styles.module.css";
import rs from "../../components/RuleBlock/Styles.module.css";

import { NavBar, RuleBlock } from "../../components";
import { aboutCompany, rules } from "./config";

import bouncer_h from "../../assets/videos/bouncer_h.mp4";
import bouncer from "../../assets/videos/bouncer.mp4";
import { isMobile } from "react-device-detect";

const RulesView = (props) => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        {<NavBar {...props} />}
        <div className={`${s.rulesBlock} ${props.showMenu && s.blured}`}>
          <RuleBlock description={aboutCompany} />
          <p id={s.keyRules}>Key rules</p>
          {rules.map((el) => (
            <RuleBlock subtitle={el.subtitle} description={el.description} source={el.source} />
          ))}
          <RuleBlock
            description={
              <p className={rs.description}>
                For more info please check out our <a href="/terms#expanded">expanded rules</a> and{" "}
                <a href="/terms#privacy">privacy policy</a> and{" "}
                <a href="/terms#tos">terms of service</a>.{" "}
              </p>
            }
            noMarker
          />
        </div>
      </div>
      <div
        className={`${s.videoTag}`}
        dangerouslySetInnerHTML={{
          __html: `
        <video  id="${s.video}" className="${
            s.video
          }" autoPlay loop muted playsinline webkit-playsinline>
        <source src="${isMobile ? bouncer : bouncer_h}" type="video/mp4" />
      </video>`,
        }}
      />
    </div>
  );
};

export default RulesView;
