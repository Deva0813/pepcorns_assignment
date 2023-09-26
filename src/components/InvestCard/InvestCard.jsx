import React from 'react';
import style from "./InvestCard.module.css"
import PropTypes from 'prop-types';

const InvestCard = props => {

    const data = props.invest_data;
    
    return (
        <div className={style.card}>
            <h2>{ " ₹ " + data.amount} <img src="/pepcorns_assignment/images/arrow-trending-up.svg" alt="invest" height={25}/></h2>
            <span className={style.subtitle} >Rewards</span>
            <ul>
                {data.rewards.map((value,index)=>{
                    return <li key={index}> {value} </li>
                })}
            </ul>
            <span className={style.subtitle} >Terms and Conditions</span>
            <ul>
            <li>{data.t_c}</li>
            </ul>
            <button>Invest &nbsp; {" ₹ " + data.amount}</button>
            <span className={style.subtitle} > CSOP <span> Limited ( {data.csop.left} of {data.csop.max} left ) </span></span> 
            
        </div>
    );
};

InvestCard.propTypes = {
    invest_data : PropTypes.any
};

export default InvestCard;