import s from "./Styles.module.css";

import { NavBar, RuleBlock, RulesContacts } from "../../components";
import { additionalRules, helpContacts, privacyPolicy, termOfService } from "./config";

const RulesView = (props) => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        {<NavBar {...props} />}
        <div className={`${s.rulesBlock} ${props.showMenu && s.blured}`}>
          {/* <p id={s.keyRules}>Expanded rules</p> */}
          {additionalRules.map((el) => (
            <RuleBlock
              subtitle={el.subtitle}
              description={el.description}
              source={el.source}
              link="expanded"
            />
          ))}
          <div className={s.contactsBlock}>
            {helpContacts.map((el) => (
              <RulesContacts title={el.title} phone={el.phone} website={el.website} />
            ))}
            <p className={s.nineOneOne}>
              If you feel you are in immediate danger or need emergency assistance, call 911 (U.S.
              or Canada) or your local law enforcement agency
            </p>
          </div>
          <div className={s.outsideBlock}>
            <p> If you are outside the US:</p>
            <ul>
              <li>
                <a
                  href="https://mtch.com/safety-details-international"
                  target="_blank"
                  title={"mtch.com"}
                  rel="noreferrer"
                >
                  Click here
                </a>{" "}
                for additional resources in many of the countries where we operate.{" "}
              </li>
              <li>
                <a
                  href="https://ilga.org/about-us"
                  target="_blank"
                  title={"ilga.org"}
                  rel="noreferrer"
                >
                  Click here
                </a>{" "}
                for information regarding international sexual orientation laws from the
                International Lesbian, Gay, Bisexual, Trans and Intersex Association (ILGA).
              </li>
            </ul>
          </div>
          )}
          {termOfService.map((el) => (
            <RuleBlock
              subtitle={el.subtitle}
              description={el.description}
              source={el.source}
              link="tos"
            />
          ))}
          {privacyPolicy.map((el) => (
            <RuleBlock
              subtitle={el.subtitle}
              description={el.description}
              source={el.source}
              link="privacy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RulesView;
