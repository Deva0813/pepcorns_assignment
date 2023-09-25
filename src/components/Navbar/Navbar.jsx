import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.leftLink}>
          <a href="/">Startups</a>
          <a href="/">Raise Funding</a>
          <a href="/">Learn</a>
        </div>
        <div className={style.logo}>
          <img src="/pepcorns_assignment/images/logo.png" width={110} alt="logo" />
        </div>
        <div className={style.rightLink}>
          <a href="/">Login</a>
          <a href="/">Getting Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
