import style from "../Footer.module.css";

export function contact() {
  return <div className={style.contact}>
    <div className={style.icon_cont}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
          stroke="#FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round" />
        <path
          d="M19.5 10.5C19.5 17.6421 12 21.75 12 21.75C12 21.75 4.5 17.6421 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5Z"
          stroke="#FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round" />
      </svg>
      <span>Kanpur | Bengaluru | Delhi</span>
    </div>
    <div className={style.icon_cont}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.8336 6.16637C14.6118 2.94454 9.38819 2.94454 6.16637 6.16637C2.94454 9.38819 2.94454 14.6118 6.16637 17.8336C9.38819 21.0555 14.6118 21.0555 17.8336 17.8336C18.1265 17.5407 18.6014 17.5407 18.8943 17.8336C19.1872 18.1265 19.1872 18.6014 18.8943 18.8943C15.0867 22.7019 8.91332 22.7019 5.10571 18.8943C1.2981 15.0867 1.2981 8.91332 5.10571 5.10571C8.91332 1.2981 15.0867 1.2981 18.8943 5.10571C20.798 7.00937 21.75 9.50593 21.75 12C21.75 12.975 21.4545 13.8866 20.941 14.5713C20.4273 15.2563 19.6603 15.75 18.75 15.75C17.8462 15.75 17.0837 15.2633 16.57 14.5859C15.668 16.1767 13.9593 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C13.469 6.75 14.7971 7.35335 15.75 8.32576V8.25C15.75 7.83579 16.0858 7.5 16.5 7.5C16.9142 7.5 17.25 7.83579 17.25 8.25V12C17.25 12.6818 17.4582 13.2703 17.759 13.6713C18.0596 14.0721 18.4177 14.25 18.75 14.25C19.0823 14.25 19.4404 14.0721 19.741 13.6713C20.0418 13.2703 20.25 12.6819 20.25 12C20.25 9.88749 19.4447 7.77743 17.8336 6.16637ZM15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12Z"
          fill="#FFF" />
      </svg>
      <span>support@pepcorns.com</span>
    </div>
  </div>;
}
