import BookList from "@/app/components/BookList/BookList"

export type MenuItems = {
 id:number,
 item:string,
 route?:string,
 svg:string
}

export type Books = {
    title: string,
    pages: number,
    genre: string,
    cover: string,
    synopsis: string,
    year: number,
    ISBN: string,
    author: Author
}

export type Author = {
    name:string,
    otherBooks: string []
}