'use client';

import {FC} from 'react';
import { Books } from '@/types';
import style from './card.module.css';

interface Prop {
    book:Books
}

const Book:FC<Prop> = ({book}) => {
  return (
    <li>
      <img src={book.cover} alt=''/>
      
      <div>
       <p>{book.title}</p>
       <p>{book.author.name}</p>
       <p>{book.genre}</p>
       <button>Add to Reading List</button>
      </div>
    </li>
  )
}

export default Book