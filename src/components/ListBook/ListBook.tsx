import {BookItem} from "../BookItem/BookItem";
import React from "react";
import {BooksPropsType} from "../../App";

type PropsType={
    books: any
    totalPrice:any
}
export function ListBook(props: PropsType) {
    return (
        <ul>
            {props.books.map((book:any) => {
                return <BookItem book={book} totalPrice={props.totalPrice} />
            })}
        </ul>
    )
}