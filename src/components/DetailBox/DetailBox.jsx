import style from "./DetailBox.module.css";

const DetailBox = () => {
  return (
    <div className={style.main}>
      <div className={style.desc}>
        <h2>Molecular skincare brand focussed on safe & visible results</h2>
        <p>
          <span>
            <img
              src="/pepcorns_assignment/images/globe-alt.svg"
              alt="global"
              width={25}
              height={25}
            />
          </span>
          <span>
            <a href="https://mycosiq.com">https://mycosiq.com</a>
          </span>
          <span>
            <img
              src="/pepcorns_assignment/images/card.svg"
              alt="card"
              width={25}
              height={25}
            />
          </span>
          {"AAGCI5003E "}
        </p>
      </div>
      <div className={style.invest_box}>
        <div className={style.yt_video}>
          <iframe
            src="https://www.youtube.com/embed/kFII05-bhGU?si=2gj862HEQp0GaiOz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className={style.invest_details}>
          <div className="">
            <div className={style.txtBox} key={1}>
              <span>₹ 1455000</span>
              <br />
              <span>56.40 % of minimum goal raised</span>
            </div>
            <div className={style.txtBox} key={2}>
              <span>144</span>
              <br />
              <span>Total investors</span>
            </div>
            <div className={style.txtBox} key={3}>
              <span>32 Days</span>
              <br />
              <span>Left to Invest</span>
            </div>
            <div className="">
            <button>Login To Invest</button><br />
            <p>₹ 1000 Minimum Investment</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
