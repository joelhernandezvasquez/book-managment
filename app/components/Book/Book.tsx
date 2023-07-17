'use client';

import {FC} from 'react';
import { Books } from '@/types';

interface Prop {
    book:Books
}

const Book:FC<Prop> = ({book}) => {
  return (
    <li>
      <p>{book.title}</p>  
    </li>
  )
}

export default Book