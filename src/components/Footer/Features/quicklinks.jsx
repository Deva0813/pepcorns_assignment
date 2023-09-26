import style from "../Footer.module.css";

export function quicklinks() {
  return <div className={style.quicklinks}>
    <div className="">
      <h4>FOR INVESTORS</h4>
      <p>
        <a href="">Start Investing</a>
      </p>
      <p>
        <a href="">How Investing works</a>
      </p>
    </div>
    <div className="">
      <h4>FOR STARTUPS</h4>
      <p>
        <a href="">Raise Capital</a>
      </p>
      <p>
        <a href="">How it works</a>
      </p>
      <p>
        <a href="">Instruments</a>
      </p>
    </div>
    <div className="">
      <h4>COMPANY</h4>
      <p>
        <a href="">About</a>
      </p>
      <p>
        <a href="">Blog</a>
      </p>
      <p>
        <a href="">FAQ</a>
      </p>
      <p>
        <a href="">Contact</a>
      </p>
      <p>
        <a href="">We&apos;re hiring</a>
      </p>
    </div>
    <div className="">
      <h4>
        <a href="">Terms Of Use</a>
      </h4>
      <h4>
        <a href="">Privacy Policy</a>
      </h4>
      <h4>
        <a href="">Refund Policy</a>
      </h4>
      <h4>
        <a href="">Risks</a>
      </h4>
    </div>
  </div>;
}
