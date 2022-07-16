import React from 'react';
import "../RestarentDetails/Restarentdetails.css";

export default function RestarentDetails(props) {
    const {
        name,
        id,
        cuisine,
        costForTwo,
        minOrder,
        deliveryTime,
        payment_methods: { cash, card, upi },
        rating,
        votes,
        reviews,
        src
    } = props.data;
    return (
        <>
        <div className='food-items'>
            <div>
                <img src={src} />

            </div>

            <div>
                <h3>{name}</h3>
                <p>{cuisine}</p>
                <p>Cost ${costForTwo} for one</p>
                <h4>Accepts online payments only</h4>

            </div>
            <div>
                <p style={{
              width: "40px",
              background: "green",
              color: "white",
              textAlign: "center",
              height: "20px",
              borderRadius: "4px",
              marginLeft: "44px"
            }}>{rating}</p>
            <p>{votes} votes</p>
            <p>{reviews} reviews</p>
            </div>
            <button className='button'>Order online</button>

        </div>


        </>
    )
}
