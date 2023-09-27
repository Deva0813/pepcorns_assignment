import { useState, useEffect } from "react";
import style from "./ContentSection.module.css";
import PitchSection from "../PitchSection/PitchSection";
import DetailSection from "../DetailsSection/DetailSection";
import DiscussionSection from "../DiscussionSection/DiscussionSection";
import UpdateSection from "../UpdateSection/UpdateSection";
import { documentSec } from "./features/documentSec";

const ContentSection = () => {
  const [activeBtn, setActiveBtn] = useState("pitch");

  useEffect(() => {
    var ele = document.getElementById(activeBtn);
    var btns = document.querySelectorAll("#btns_div button");
    btns.forEach((element) => {
      element.classList.remove(style.active);
    });
    ele.classList.add(style.active);
  }, [activeBtn]);

  const handleNavigation = (e) => {
    setActiveBtn(e.target.id);
  };

  return (
    <div className={style.container}>
      <div className={style.sec_nav_buttons} id="btns_div">
        <button id="pitch" onClick={handleNavigation}>
          Pitch
        </button>
        <button id="details" onClick={handleNavigation}>
          Details
        </button>
        <button id="discussion" onClick={handleNavigation}>
          Discussion
        </button>
        <button id="updates" onClick={handleNavigation}>
          Updates
        </button>
      </div>

      <div className={style.sec_cont}>
        <div className={style.content}>
          {activeBtn == "pitch" ? <PitchSection/> : null}
          {activeBtn == "details" ? <DetailSection/> : null}
          {activeBtn == "discussion" ? <DiscussionSection/> : null}
          {activeBtn == "updates" ? <UpdateSection/> : null}
        </div>
        {documentSec()}
      </div>
    </div>
  );
};

export default ContentSection;

