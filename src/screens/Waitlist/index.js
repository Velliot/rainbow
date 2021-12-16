import { useRef, useState } from "react";
import useWindowDimensions from "../../hooks";
import WaitlistView from "./WaitlistView";

const WaitList = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { height, width } = useWindowDimensions();
  const [data, setData] = useState({});

  const refs = {
    name: useRef(),
    age: useRef(),
    gender: useRef(),
    location: useRef(),
    job: useRef(),
    website: useRef(),
    phoneNumber: useRef(),
    agreeReceiveSMS: useRef(),
    email: useRef(),
    agreeReceiveEmail: useRef(),
    doYouKnowAnyoneInsideClub: useRef(),
    howDidYouHearAboutUs: useRef(),
    aboutYou: useRef(),
  };

  const updateData = (ref) => {
    setData((prev) => ({ ...prev, [ref]: refs[ref].current.value }));
  };

  const pickerUpdate = (ref) => (val) => {
    setData((prev) => ({ ...prev, [ref]: val }));
  };

  const sendMessage = () => {
    const ebody = encodeURIComponent(
      Object.keys(data)
        .map((el) => `${el?.value || el}: ${data[el]?.value || data[el] || ""}`)

        .join("\r\n")
    );
    return `mailto:your@mailbox.com?subject=Waitlist&body=${ebody}`;
  };

  return (
    <WaitlistView
      width={width}
      height={height}
      showMenu={showMenu}
      setShowMenu={setShowMenu}
      data={data}
      refs={refs}
      updateData={updateData}
      pickerUpdate={pickerUpdate}
      sendMessage={sendMessage}
      href={sendMessage()}
    />
  );
};

export default WaitList;
