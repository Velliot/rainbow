import { useState } from "react";
import ContactView from "./ContactView";

const Contact = () => {
  const [selectedItem, setSelectedItem] = useState("Help and support");
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    "Help and support",
    "Advertise & Press",
    "Advertise & Press",
    "Work with us",
    "Something else",
  ];

  return (
    <ContactView
      navItems={navItems}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      showMenu={showMenu}
      setShowMenu={setShowMenu}
    />
  );
};

export default Contact;
