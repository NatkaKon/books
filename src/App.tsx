import React, {useEffect, useState} from 'react';
import s from './App.module.sass';
import {ListBook} from "./components/ListBook/ListBook";

function App() {

    const [books, setBooks] = useState<BookPropsType[] | null>(null)

    useEffect(() => {
        try {
            fetch('http://localhost:3001/books')
                .then(res => {
                    return res.json()
                }).then(books => {
                setBooks(books)
            })
        } catch (err) {
            console.log('error', err)
        }
    }, [])


    return (
        <div className={s.wrapper}>
            {books ? <ListBook books={books}/> : 'no books'}
        </div>
    );
}


//types
export type BooksPropsType = {
    books: BookPropsType[]
}
export type BookPropsType = {
    id: number
    name: string
    price: number
    category?: string
}

export default App;
