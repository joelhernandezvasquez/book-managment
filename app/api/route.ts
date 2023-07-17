import { NextResponse } from "next/server";
import { Books } from "@/types";

export async function GET(request: Request) {

    const response = await fetch(`${process.env.DATA_SOURCE_URL}:3004/library`);
    const data:any = await response.json();
    const bookList:Books =  data.data.map((item:Books)=> item.book);
    return NextResponse.json({bookList});

}