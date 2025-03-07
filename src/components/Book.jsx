export default function Book(props) {

    return (
        <div className="flex w-[500px] h-[250px] bg-white">
            <img src={props.bookDetails.coverImage} alt="" className="w-[150px]"/>
            <div className="mx-4">
                <h1 className="text-xl font-bold my-2" >{props.bookDetails.title}</h1>
                <p className="my-2">{props.bookDetails.description}</p>
                <span className="font-bold">{"Author:  "}</span><span>{props.bookDetails.author}</span><br/>
                <span className="font-bold">{"Published Date:  "}</span><span>{props.bookDetails.publishedDate}</span><br/>
                <span className="font-bold">{"Pages:  "}</span><span>{props.bookDetails.pages}</span>

            </div>


        </div>
    )
}