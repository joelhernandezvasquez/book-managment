'use client';

import {FC} from 'react';
import { Books } from '@/types';
import style from './card.module.css';

interface Prop {
    book:Books
}

const Book:FC<Prop> = ({book}) => {
  return (
    <li className={style.book_card}>
      <img className={style.book_image} src={book.cover} alt=''/>
      
      <div className={style.body_card}>
       <p>{book.title}</p>
       <p className={style.author}>by {book.author.name}</p>
       <p>{book.genre}</p>
       <button>Add to List</button>
      </div>
    </li>
  )
}

export default Book