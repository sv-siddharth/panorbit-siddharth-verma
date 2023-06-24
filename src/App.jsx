import React,{ useState,useContext } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import ProfileDetails from './components/ProfileDetails'
import Posts from './components/Posts'
import UserDetails from './pages/UserDetails'
import UsersAccount from './pages/UsersAccount'
import Gallery from './components/Gallery'
import Todo from './components/Todo'

export const GlobalContext = React.createContext();


function App() {
  const [count, setCount] = useState(0)
  const [usersData, setUsersData] = useState([]);

  return (
    <GlobalContext.Provider value={
     {
      globalUserData : usersData,
      setGlobalUserData : setUsersData
     }
    } className="App">
      <Routes>
      <Route path="/" element={ <UsersAccount  usersData={usersData} setUsersData={setUsersData}/> } />
      <Route path="/user/:id" element={<UserDetails  usersData={usersData} setUsersData={setUsersData}/>}>
        <Route path='details' element={<ProfileDetails />} />
        <Route path='post' element={<Posts />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='todo' element={<Todo />} />
      </Route>
      </Routes>
    </GlobalContext.Provider>
  )
}

export default App
