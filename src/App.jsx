import Header from "./components/Header"
import './index.css'
import { Outlet } from "react-router-dom"

function App() {
 
  return (
    <div className="bg-blue-100">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
