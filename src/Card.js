import React from "react";
export function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card_body">
                    <img src={props.img} className="card-ima" />
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-desc">{props.desc}</p>
                </div>
                <button className="aries">View More</button>
            </div>
        </>
    );
}
export default Card