import ContStyle from "./ContentPage.module.css";

export const ContentPage = () => {
    return (
        <div className={ContStyle.main}>
            <div className={ContStyle.container}>
                <button className={ContStyle.con_button}>{"Back"}</button>
            </div>
            <div className={ContStyle.container}>
                <div className={ContStyle.titleBox}>
                    <div className={ContStyle.com_logo}></div>
                    <div className={ContStyle.title}>
                        <div className={ContStyle.titleTxt}>
                            <div className={ContStyle.titlebtn}>
                                CosIQ
                                <div className="">
                                    <button>Save</button>
                                    <button>Share</button>
                                </div>
                            </div>
                            <div className="">Delhi</div>
                        </div>
                        <div className={ContStyle.tags}>
                            <hr />
                            <p>
                                {" "}
                                <span># BEAUTY & PERSONAL CARE</span>{" "}
                                <span># SHARK TANK</span> # FMCG
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ContentPage;
