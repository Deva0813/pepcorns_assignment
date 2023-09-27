import style from "../ContentSection.module.css";
import { data } from "../../../assets/InvestCardData";
import InvestCard from "../../InvestCard/InvestCard";

export function documentSec() {
  return <div className={style.doc_sec +" "+ style.isMobile }>
    <h2>Documents</h2>
    <a className={style.doc_file_box} href="/pepcorns_assignment/files/icon1677255822062.zip" download={"icon1677255822062.zip"}>
      CosIQ.zip
      <img
        src="/pepcorns_assignment/images/download.svg"
        alt="down"
        height={20} />
    </a>
    <div className={style.invest_sec}>
      {data.map((item, index) => {
        return <InvestCard invest_data={item} key={index} />;
      })}
      <p>Custom Offer ? &nbsp; <a href="/">Click Here</a></p>
    </div>
  </div>;
}
