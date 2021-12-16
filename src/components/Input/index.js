import s from "./Styles.module.css";
import TextareaAutosize from "react-textarea-autosize";

const Input = ({
  placeholder,
  value,
  setValue,
  inputRef,
  type = "text",
  subtitle,
  checkboxTitle,
  checkboxDescription,
  multiline,
  checked,
  setChecked,
  ...props
}) => {
  return (
    <>
      <p className={s.placeholder}>{placeholder}</p>
      <>
        {multiline ? (
          <TextareaAutosize
            value={value}
            onChange={setValue}
            ref={inputRef}
            className={s.input}
            type={type}
            minRows={3}
            {...props}
          />
        ) : (
          <input
            value={value}
            onChange={setValue}
            ref={inputRef}
            className={s.input}
            type={type}
            {...props}
          />
        )}
        {checkboxTitle && (
          <label for={checkboxTitle} className={s.checkboxWrapper}>
            <div className={s.inputWrapper}>
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                id={checkboxTitle}
              />
              {checked && <div className={s.inputWrapperChecked} />}
            </div>
            <div className={s.label}>
              <p className={s.checkboxTitle}>{checkboxTitle}</p>
              <p className={s.checkboxDescription}>{checkboxDescription}</p>
            </div>
          </label>
        )}
      </>

      {subtitle && <p className={s.subtitle}>{subtitle}</p>}
    </>
  );
};

export default Input;
