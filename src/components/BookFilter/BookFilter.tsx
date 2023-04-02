import React, {ChangeEvent, useState} from 'react';
import arrowUp from '../../assets/arrow-up-362-svgrepo-com.svg'
import arrowDown from '../../assets/arrow-down-360-svgrepo-com.svg'
import s from './BookFilter.module.sass'

type PropsType = {
    filterBooks: (value: string) => void
    sortBooks: () => void
    orderBy: boolean
}
export const BookFilter = (props: PropsType) => {
    const [categories, setCategories] = useState(["animals", "tourism", "parfum", "music", "food"])

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.filterBooks(e.currentTarget.value)
    }

    return (
        <div className={s.bookFilter}>
            <div className={s.orderBy} onClick={() => props.sortBooks()}>
                <span><b style={{cursor: 'pointer'}}>orderBy </b></span><img src={props.orderBy ? arrowUp : arrowDown}
                                                                             alt="arrow"/>
            </div>
            <div className={s.select}>
                <select onChange={onSelectChange}>
                    {categories.map(category => (<option value={category}>{category}</option>)
                    )}
                </select>
            </div>
        </div>
    );
};


