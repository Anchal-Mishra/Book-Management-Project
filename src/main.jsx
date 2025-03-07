import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Help from './components/Help.jsx'
import Error from './components/Error.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import BookList from './components/BookList.jsx'
import BookDetails from './components/BookDetails.jsx'
import Cart from './components/Cart.jsx'


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<BookList/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/help",
        element:<Help/>
      },
      {
        path:"/book/:id",
        element:<BookDetails/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }

    ],
    errorElement:<Error/>
  },
  
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
