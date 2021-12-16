import { useState } from "react";
import RulesView from "./RulesView";

const Rules = () => {
  const [showMenu, setShowMenu] = useState(false);

  return <RulesView showMenu={showMenu} setShowMenu={setShowMenu} />;
};

export default Rules;
