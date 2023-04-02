import React from "react";
import {BookPropsType, BooksPropsType} from "../../App";
import s from './BookItem.module.sass'

type PropsType={
    book: BookPropsType
    totalPrice:(book:BookPropsType)=>void
}

export function BookItem(props: PropsType) {
    return (
        <div className={s.book}>
            <div className={s.book__column} onClick={()=> props.totalPrice(props.book)}>
                <div className={s.book__number}>{props.book.id}</div>
                <div className={s.book__name}>{props.book.name}</div>
            </div>
            <div className={s.book__column}>
            <div className={s.book__price}>{props.book.price}</div>
            </div>
        </div>
    )
}