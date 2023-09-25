import style from "./TitleCard.module.css";

const TitleCard = () => {
  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <div className={style.com_logo}></div>
        <div className={style.title}>
          <div className={style.titleTxt}>
            <div className={style.titlebtn}>
              CosIQ
              <div className="">
                <button>Save</button>
                <button>Share</button>
              </div>
            </div>
            <div className="">Delhi</div>
          </div>
          <div className={style.tags}>
            <hr />
            <p>
              {" "}
              <span># BEAUTY & PERSONAL CARE</span> <span># SHARK TANK</span> #
              FMCG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
