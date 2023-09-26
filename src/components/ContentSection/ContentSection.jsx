import {useState,useEffect} from 'react';
import style from "./ContentSection.module.css"

const ContentSection = () => {
    const [activeBtn , setActiveBtn] = useState("pitch")

    const handleNavigation = (e) =>{
        setActiveBtn(e.target.id)
    }

    return (
        <div className={style.container}>
            <div className={style.sec_nav_buttons}>
                <button id='pitch' onClick={handleNavigation} >Pitch</button>
                <button id='details' onClick={handleNavigation} >Details</button>
                <button id='discussion' onClick={handleNavigation} >Discussion</button>
                <button id='updates' onClick={handleNavigation} >Updates</button>
            </div>
        </div>
    );
};

export default ContentSection;