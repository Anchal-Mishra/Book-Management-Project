import {useRouteError} from "react-router-dom"

function Error() {
    const errorMessage=useRouteError();
    console.log(errorMessage);
    
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col ">
      <h1 className="text-9xl font-bold mb-10 text-blue-600">Oops!!</h1>
      <h3>{errorMessage.status} {errorMessage.statusText}</h3>
      <h2>{errorMessage.data}</h2>
      <button className="border-2">Go to Home Page</button>
    </div>
  )
}

export default Error
