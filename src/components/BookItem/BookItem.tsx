import React from "react";
import {BookPropsType} from "../../App";
import s from './BookItem.module.sass'


export function BookItem(props: BookPropsType) {
    const {id, name, price} = props
    return (
        <div className={s.book}>
            <div className={s.book__column}>
                <div className={s.book__number}>{id}</div>
                <div className={s.book__name}>{name}</div>
            </div>
            <div className={s.book__column}>
            <div className={s.book__price}>{price}</div>
            </div>
        </div>
    )
}