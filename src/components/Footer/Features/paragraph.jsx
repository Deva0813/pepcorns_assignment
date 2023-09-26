import style from "../Footer.module.css";

export function paragraph() {
  return <p className={style.footer_txt}>
    <a href="https://pepcorns.com/">www.pepcorns.com</a> (“Platform”) is a
    website owned and operated by Pepcorns Technologies Private Limited
    (“Pepcorns”), which is neither a registered stock exchange, an
    investment advisor nor a funding portal and is not registered with the
    Securities Exchange Board of India (“SEBI”). Nothing contained on this
    Platform shall be construed as an authorization by the SEBI to solicit
    investments nor should the Platform be construed as a SEBI authorized
    crowdfunding platform or a stock exchange, or their equivalent. The
    securities offered by any company registered on Platform are not
    traded on any stock exchange recognised by SEBI. Pepcorns does not
    allow any secondary market trading of securities on the Platform. By
    accessing this Platform and any pages thereof, you agree to be bound
    by the <a href="https://www.pepcorns.com/terms">Terms of Use</a> and
    <a href="https://www.pepcorns.com/privacy"> Privacy Policy</a> .
    Investing in start-ups and early-stage businesses involves risks,
    including illiquidity, lack of dividends, loss of investment and
    dilution, and it should be done only as part of a diversified
    portfolio. Pepcorns is targeted exclusively at investors who are
    sufficiently sophisticated to understand these risks and make their
    own investment decisions. Please read our{" "}
    <a href="https://www.pepcorns.com/risks">RISK POLICY</a> .
  </p>;
}
