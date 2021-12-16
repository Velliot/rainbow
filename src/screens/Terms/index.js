import { useState } from "react";
import { useLocation } from "react-router";
import TermsView from "./TermsView";

const Terms = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.hash || "#expanded");
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    { label: "Expanded rules", currentPageRef: "#expanded" },
    { label: "Privacy policy", currentPageRef: "#privacy" },
    { label: "Terms of service", currentPageRef: "#tos" },
  ];

  return (
    <TermsView
      navItems={navItems}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      showMenu={showMenu}
      setShowMenu={setShowMenu}
    />
  );
};

export default Terms;
