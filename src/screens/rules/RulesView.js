import s from "./Styles.module.css";
import rs from "../../components/RuleBlock/Styles.module.css";

import { NavBar, RuleBlock } from "../../components";
import { aboutCompany, rules } from "./config";

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
    </div>
  );
};

export default RulesView;
