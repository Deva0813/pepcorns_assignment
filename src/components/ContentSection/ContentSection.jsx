import { useState, useEffect } from "react";
import style from "./ContentSection.module.css";
import {data} from "../../assets/InvestCardData"
import InvestCard from "../InvestCard/InvestCard";
import PitchSection from "../PitchSection/PitchSection";

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
          {activeBtn == "details" ? "Details" : null}
          {activeBtn == "discussion" ? "Discussion" : null}
          {activeBtn == "updates" ? "Updates" : null}
        </div>
        <div className={style.doc_sec}>
          <h2>Documents</h2>
          <a className={style.doc_file_box} href="/pepcorns_assignment/files/icon1677255822062.zip" download={"icon1677255822062.zip"} >
            CosIQ.zip
            <img
              src="/pepcorns_assignment/images/download.svg"
              alt="down"
              height={20}
            />
          </a>
          <div className={style.invest_sec}>
            {data.map((item, index)=>{
                return <InvestCard invest_data={item} key={index}/>
            })}
            <p>Custom Offer ? &nbsp; <a href="/">Click Here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
