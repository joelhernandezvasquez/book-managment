import { Suspense } from 'react';
import { getListOfBooks } from '@/services';
import style from './bookList.module.css';
import Book from '../Book/Book';

const BookList = async () => {
  const bookList = await getListOfBooks();
  
  return (
    <section className={style.book_list_container}>
        <h2 className={style.book_list_title}>Trending Books</h2>
        <Suspense fallback= {<h2>Loading...</h2>}>
        <ul className={style.book_list}>
          {
            bookList?.map((book)=>{
              return <Book key={book.ISBN} book={book}/>
            })
          }
        </ul>
        </Suspense>
        
    </section>
  )
}

export default BookList