import Book from "./Book"
import { booksdata } from "../utils/Mockdata"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function BookList(){
    const [searchedBook, setSearchedBook]=useState(booksdata)
    function handleClick(searchText){
        let filteredBook=booksdata.filter((eachBook)=>{
            return eachBook.title.toLowerCase().includes(searchText.toLowerCase())
        })
       setSearchedBook(filteredBook)     
       console.log(filteredBook);
        
    }
    return(
        <>
        <h1 className="text-center text-3xl mt-2 font-semibold ">Search Book</h1>
        <div className="text-center">
            <input type="text" className="border-2 w-[500px] px-10 rounded-xl my-5" onChange={(e)=>handleClick(e.target.value)}/>
            <button onClick={handleClick} className="border-2 mx-2 px-4 rounded-xl bg-blue-400">Go</button>
        </div>
        <div className="flex flex-wrap gap-10 w-3/4 m-auto my-10">
            {searchedBook.map((eachBook)=><Link to={`book/${eachBook.id}`}><Book bookDetails={eachBook} key={eachBook.id}/></Link>)}
        </div>
        
        </>
        
    )
}