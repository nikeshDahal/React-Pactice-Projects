import React from "react";
import cardOuterStyle from './Card.module.css'
const Card = (props) =>{
    return <div className={`${cardOuterStyle.card} ${props.className}`}>{props.children}</div>
}
export default Card;