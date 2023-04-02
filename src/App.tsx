import React, {useEffect, useState} from 'react';
import s from './App.module.sass';
import {ListBook} from "./components/ListBook/ListBook";
import {BookFilter} from "./components/BookFilter/BookFilter";
import Basket from "./components/Basket/Basket";

function App() {

    const [books, setBooks] = useState<BookPropsType[]>([])
    const [orderBy, setOrderBy] = useState(false)
    const [totalOrders, setTotalOrders] = useState<BookPropsType[]>([])
    const [orderPrice, setOrderPrice] = useState(0)

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

    const filterBooks = (value: string) => {
        if (books) {
            const filteredBooks = books.filter(book => {
                return book.category?.includes(value)
            })
            setBooks(filteredBooks)
        }
    }

    const sortBooks = () => {
        const copyBooks = [...books]
        if (orderBy) {
            const sortedUpBooks = copyBooks.sort((a: BookPropsType, b: BookPropsType) => a.price > b.price ? 1 : -1)
            setBooks(sortedUpBooks)
            setOrderBy(!orderBy)
        } else {
            const sortedDownBooks = copyBooks.sort((a: BookPropsType, b: BookPropsType) => a.price > b.price ? -1 : 1)
            setBooks(sortedDownBooks)
            setOrderBy(!orderBy)
        }
    }

    const totalPrice = (book: BookPropsType) => {
        setTotalOrders([...totalOrders, book])
        let orderSum = totalOrders.reduce((sum, current) => sum + current.price, 0)
        setOrderPrice(orderSum)
    }

    return (
        <div className={s.wrapper}>
            <h2>Books</h2>
            <div>
                <BookFilter orderBy={orderBy} filterBooks={filterBooks} sortBooks={sortBooks}/>
            </div>
            <div>
                {books ? <ListBook books={books} totalPrice={totalPrice}/> : 'no books'}
            </div>
            <div>
                <Basket orderPrice={orderPrice}/>
            </div>
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
    category?: CategoryType
}
export type CategoryType = "animals" | "tourism" | "parfum" | "music" | "food"
export default App;
