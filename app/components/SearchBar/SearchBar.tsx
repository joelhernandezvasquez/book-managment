
'use client';
import {useState,ChangeEvent} from 'react';
import style from './searchBar.module.css';

const SearchBar = () => {
    const [searchTerm,setSearchTerm] = useState('');

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) =>{
     setSearchTerm(e.target.value);
    }
  
    return (
    <div className={style.search_bar}>
         <input 
          type='text' 
          name='search' 
          id='search_term'
          value={searchTerm}
          onChange={handleOnChange}
          placeholder='Search'
         />

         <button type='submit'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                             </svg> 
        </button>
       
    </div>
  )
}

export default SearchBar


