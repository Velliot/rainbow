import { Link } from "react-router-dom";
import { Input, NavBar, Picker, Title } from "../../components";
import { genderList } from "./config";
import s from "./Styles.module.css";
import h2 from "../../assets/videos/h2.mp4";

const WaitlistView = (props) => {
  return (
    <div className="container">
      {<NavBar {...props} />}

      <div className={`${s.wrapper} ${props.showMenu && s.blured}`}>
        <Title value="Get on waitlist" style={s.title} />
        <p className={s.description}>
          RNBW CLUB is an invite only Queer social club. Our goal is to create a safe, curated and
          fun environment. Please make sure to read our{" "}
          <Link to="/club-rules" className={s.link}>
            CLUB RULES
          </Link>
          . Admission is not guaranteed however, anyone can join with an invite from an existing
          user.
        </p>
        <div className={s.form}>
          <p className={s.formTitle}>General info</p>
          <Input
            value={props.data.name}
            placeholder={"Name"}
            inputRef={props.refs.name}
            setValue={() => props.updateData("name")}
            maxLength={50}
          />
          <Input
            value={props.data.age}
            placeholder={"Age"}
            inputRef={props.refs.age}
            setValue={() => props.updateData("age")}
            maxLength={2}
          />
          <Picker
            gender={props.gender}
            listItems={genderList}
            placeholder="Gender"
            value={props.data.gender}
            setValue={props.pickerUpdate("gender")}
          />
          <Input
            gender={props.location}
            placeholder="Location"
            inputRef={props.refs.location}
            value={props.data.location}
            setValue={() => props.updateData("location")}
          />
          <Input
            value={props.data.job}
            placeholder={"Job"}
            inputRef={props.refs.job}
            setValue={() => props.updateData("job")}
          />
          <p className={s.formTitle}>Contacts</p>
          <Input
            value={props.data.website}
            placeholder={"Instagram/Twitter"}
            inputRef={props.refs.website}
            setValue={() => props.updateData("website")}
            subtitle={"Please make sure your account is not private."}
          />
          <Input
            value={props.data.phoneNumber}
            placeholder={"Phone"}
            inputRef={props.refs.phoneNumber}
            setValue={() => props.updateData("phoneNumber")}
            checkboxTitle="I agree to receive text messages"
            checkboxDescription="We promise that this will only be important information. No spam."
            checked={props.data.agreeReceiveSMS}
            setChecked={props.pickerUpdate("agreeReceiveSMS")}
          />
          <Input
            value={props.data.email}
            placeholder={"Email address"}
            inputRef={props.refs.email}
            setValue={() => props.updateData("email")}
            checkboxTitle="I agree to receive emails"
            checkboxDescription="Important information, news, promotions."
            checked={props.data.agreeReceiveEmail}
            setChecked={props.pickerUpdate("agreeReceiveEmail")}
          />
          <p className={s.formTitle}>Additional info</p>
          <Input
            value={props.data.doYouKnowAnyoneInsideClub}
            placeholder={"Do you know anyone inside the club ?"}
            inputRef={props.refs.doYouKnowAnyoneInsideClub}
            setValue={() => props.updateData("doYouKnowAnyoneInsideClub")}
          />
          <Input
            placeholder="How did you hear about us?"
            value={props.data.howDidYouHearAboutUs}
            inputRef={props.refs.howDidYouHearAboutUs}
            setValue={() => props.updateData("howDidYouHearAboutUs")}
          />
          <Input
            value={props.data.aboutYou}
            placeholder={"Tell us a little about you"}
            inputRef={props.refs.aboutYou}
            setValue={() => props.updateData("aboutYou")}
            multiline
          />
          <a className={s.button} rel="noreferrer" href={props.href} target="_blank">
            Get on waitlist
          </a>
        </div>
      </div>
      <div
        className={`${s.videoTag}`}
        dangerouslySetInnerHTML={{
          __html: `
        <video  id="${s.video}" className="${s.video}" autoPlay loop muted playsinline webkit-playsinline>
        <source src="${h2}" type="video/mp4" />
      </video>`,
        }}
      />
    </div>
  );
};

export default WaitlistView;
