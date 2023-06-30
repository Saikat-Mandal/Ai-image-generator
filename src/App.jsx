import './App.css'

import Header from './components/header'
import CreatePost from "./pages/CreatePost"
import Home from './pages/Home'
import {Routes , Route} from "react-router-dom"
function App() {
  

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/createpost" element={ <CreatePost/>}/>
       
        </Routes>
      
    </>
  )
}

export default App
