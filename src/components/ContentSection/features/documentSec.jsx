import style from "../ContentSection.module.css";
import { data } from "../../../assets/InvestCardData";
import InvestCard from "../../InvestCard/InvestCard";
import { useState } from "react";
import Modal from "./Modal/Modal";

function DocumentSec() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={style.doc_sec + " " + style.isMobile}>
      <h2>Documents</h2>
      <a
        className={style.doc_file_box}
        href="/pepcorns_assignment/files/icon1677255822062.zip"
        download={"icon1677255822062.zip"}
      >
        CosIQ.zip
        <img
          src="/pepcorns_assignment/images/download.svg"
          alt="down"
          height={20}
        />
      </a>
      <div className={style.mobile_btn}>
        <button onClick={openModal}>Invest</button>
        <Modal
          isOpen={isOpen}
          isClose={closeModal}
          title={"Invest"}
          content={data.map((item, index) => {
            return <InvestCard invest_data={item} key={index} />;
          })}
        />
      </div>
      <div className={style.invest_sec}>
        {data.map((item, index) => {
          return <InvestCard invest_data={item} key={index} />;
        })}
        <p>
          Custom Offer ? &nbsp; <a href="/">Click Here</a>
        </p>
      </div>
    </div>
  );
}

export default DocumentSec;
