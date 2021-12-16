import s from "./Styles.module.css";

const Title = ({ value, style }) => <p className={`${s.title} ${style}`}>{value}</p>;

export default Title;
