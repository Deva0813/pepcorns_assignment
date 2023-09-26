import React from 'react';
import style from './PitchSection.module.css'

const PitchSection = () => {

    const imgList = [0,1,2,3,4,5,6,7,8,9]

    return (
        <div className={style.main} >  
            <div className={style.head}>
                <span className={style.title} >Deck Info</span>
                <span><a className={style.link} href="https://api.pepcorns.com/clientassets/icon1677255746699.pdf">CosIQ_pitch.pdf</a></span>
            </div>
            <div className={style.body}>
                {imgList.map((value,index)=>{
                    return <div key={index} className={style.image} style={{background:`url("/images/deck/${value}.png")`}} ></div>
                })}
            </div>
        </div>
    );
};

export default PitchSection;