import Select from "react-select";

import s from "./Styles.module.css";

const Picker = ({ listItems, placeholder, value, setValue }) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      // background: "#161616",
      margin: 0,
      padding: 0,
      // match with the menu
      borderRadius: 0,
      // Overwrittes the different states of border
      border: "none",
      borderBottom: "1px solid #303133",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "1px solid #303133",
      },
      background: "transparent",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
    }),
    indicatorSeparator: (base) => null,
    singleValue: (base) => ({
      ...base,
      color: "#FFFFFF",
      padding: 0,
      margin: 0,
    }),
    option: (base) => ({
      ...base,
      color: "#FFFFFF",
      background: "#161616",
      "&:hover": {
        background: "#1b1b22",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#C9CACF",
      margin: 0,
      padding: 0,
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      margin: 0,
      padding: 0,
      zIndex: 2,
    }),
    menuList: (base) => ({
      ...base,
      background: "#161616",
      padding: 0,
      margin: 0,
      "::-webkit-scrollbar": {
        width: "4px",
      },
      "::-webkit-scrollbar-track": {
        background: "#161616",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#ffffff",
      },
      // "::-webkit-scrollbar-thumb:hover": {
      //   background: "#555",
      // },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#96989e",
      margin: 0,
      padding: 0,
      size: "16px",
    }),
  };
  return (
    <div className={s.wrapper}>
      <span className={s.placeholder}>{placeholder}</span>
      <Select
        styles={customStyles}
        className={s.input}
        placeholder={""}
        isDisabled={false}
        isClearable={false}
        isRtl={false}
        isSearchable={false}
        name="color"
        options={listItems}
        value={value}
        onChange={setValue}
        // maxMenuHeight={1000}
      />
    </div>
  );
};

export default Picker;
