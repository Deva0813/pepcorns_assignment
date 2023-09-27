import style from "./Footer.module.css";
import { paragraph } from "./Features/paragraph";
import { contact } from "./Features/contact";
import { social } from "./Features/social";
import { quicklinks } from "./Features/quicklinks";

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.comp_details}>
            <img
              src="/pepcorns_assignment/images/logo.png"
              width={200}
              alt="logo"
            />
            <p>
              Enabling everyday people to invest <br /> in startups they believe
              in
            </p>
            {contact()}
            {social()}
          </div>
          {quicklinks()}
        </div>
        {paragraph()}
      </div>
    </div>
  );
};

export default Footer;

