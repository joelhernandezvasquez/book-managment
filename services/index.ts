import { Books } from "@/types";


export const getListOfBooks = async () => {

    try{
      const request =  await fetch('http://localhost:3000/api');

      if (!request.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
      const response = await request.json();
      const bookList: Books [] = response.data.map((item)=> item.book);
      return bookList;
    }
    catch(err){
     console.log(err);
    }
}