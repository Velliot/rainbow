import s from "./Styles.module.css";

const RuleBlock = ({ subtitle, description, source, title, link, noMarker = false }) => (
  <div className={s.ruleBlock} id={link}>
    {title && <p className={s.title}>{title}</p>}
    <p className={s.subtitle}>{subtitle || ""}</p>
    {description ? (
      typeof description === "string" ? (
        description.split("\n").map((str) => <p className={s.description}>{str}</p>)
      ) : noMarker ? (
        description
      ) : (
        <ul>
          {description.map((el) => (
            <li className={s.description}>{el}</li>
          ))}
        </ul>
      )
    ) : null}
    {source && <p className={s.source}>{source}</p>}
  </div>
);

export default RuleBlock;
