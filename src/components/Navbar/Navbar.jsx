import style from "./Navbar.module.css";

const Navbar = () => {

  const handelHamburger = () => {
      document.getElementById("menu").classList.toggle(style.active);
  };

  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.leftLink}>
          <a href="/">Startups</a>
          <a href="/">Raise Funding</a>
          <a href="/">Learn</a>
        </div>
        <div className={style.logo}>
          <img src="/pepcorns_assignment/images/logo.png" width={130} alt="logo" />
        </div>
        <div className={style.rightLink}>
          <a href="/">Login</a>
          <a href="/">Getting Started</a>
        </div>
        <div className={style.mobileLink}>
          <a href="/">Getting Started</a>
          <button id="hamburger" onClick={handelHamburger} ><img src="/pepcorns_assignment/images/bars.svg" alt="bars" /></button>
        </div>
        <div className={style.menu} id="menu">
          <ul>
            <li><a href="/">Raise Funding</a></li>
            <li><a href="/">Startups</a></li>
            <li><a href="/">Learn</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
