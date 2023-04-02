import React from 'react';

type PropsType={
    orderPrice:number
}
const Basket = (props:PropsType) => {
    return (
        <div>
         <p><b>Total price: </b>{props.orderPrice}</p>
            <p></p>
        </div>
    );
};

export default Basket;