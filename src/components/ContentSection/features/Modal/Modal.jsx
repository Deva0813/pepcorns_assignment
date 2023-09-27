import style from "./Modal.module.css";

const Modal = ({ isOpen, isClose, content, title }) => {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  if (isOpen) {
    disableScroll();
  } else {
    enableScroll();
  }

  return (
    isOpen && (
      <div className={style.modal_overlay} onClick={isClose}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          <div className={style.head}>
            <p className={style.title}>{title}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              onClick={isClose}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.292847 16.293L16.2928 0.292969L17.7071 1.70718L1.70706 17.7072L0.292847 16.293Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.707 16.293L1.70703 0.292969L0.292816 1.70718L16.2928 17.7072L17.707 16.293Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={style.content}>{content}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
