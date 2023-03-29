import {BookItem} from "../BookItem/BookItem";
import React from "react";
import {BookPropsType, BooksPropsType} from "../../App";

export function ListBook(props: BooksPropsType) {
    const {books} = props
    return (
        <ul>
            {books.map((book: BookPropsType) => {
                return <BookItem key={book.id} id={book.id} name={book.name} price={book.price}/>
            })}
        </ul>
    )
}