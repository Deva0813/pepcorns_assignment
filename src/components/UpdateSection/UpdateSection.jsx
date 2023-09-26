import style from "./UpdateSection.module.css"

const UpdateSection = () => {
    return (
        <div className={style.main} >
             <div className={style.head}>
            <span className={style.title}>Updates</span>
            </div>
            <div className={style.body}>
                <div className={style.no_msg}>
                <div className="">
                <img src="/public/images/no_msg.svg" width={250}  alt="no msg" />
                </div> <br />
                <p>No Updates Found</p>
                </div>
            </div>
        </div>
    );
};

export default UpdateSection;