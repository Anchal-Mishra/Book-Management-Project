import { useParams } from "react-router-dom"
import { booksdata } from "../utils/Mockdata";

function BookDetails() {
    const params=useParams();
    console.log(params);
    const book=booksdata.filter((eachBook)=>eachBook.id==params.id)
    console.log(book);
    
  return (
    <div className="flex flex-col flex-wrap ">
      <h1>{`Book Details ${params.id}`}</h1>
      {
        book.map((book)=>{
            return(
            <div className="w-[500px]">
            <img src={book.coverImage} alt="" />
            <h1>{book.title}</h1>
            </div>)

        })
      }
      
    </div>
  )
}

export default BookDetails
