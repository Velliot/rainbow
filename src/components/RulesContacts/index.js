import phoneIcon from "../../assets/icons/phone.svg";
import webIcon from "../../assets/icons/web.svg";

import s from "./Styles.module.css";

const RulesContacts = ({ title, phone, website }) => (
  <div className={s.wrapper}>
    <p className={s.title}>{title}</p>
    {phone && (
      <div className={s.contentWrapper}>
        <img src={phoneIcon} alt={"phone"} />
        <span className={s.description}>{phone}</span>
      </div>
    )}
    {website && (
      <div className={s.contentWrapper}>
        <img src={webIcon} alt={"website"} />
        <span className={s.description}>{website}</span>
      </div>
    )}
  </div>
);

export default RulesContacts;
