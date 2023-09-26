import style from "./DiscussionSection.module.css";

const DiscussionSection = () => {
    return (
        <div className={style.main}>
            <div className={style.head}>
            <span className={style.title}>Discussion</span>
            <button>Add Comment</button>
            </div>
            <div className={style.body}>
                <div className={style.no_msg}>
                <div className="">
                <img src="/public/images/no_msg.svg" width={250}  alt="no msg" />
                </div> <br />
                <p>No Comments Found. Be the first one to comment!</p>
                </div>
            </div>
        </div>
    );
};

export default DiscussionSection;