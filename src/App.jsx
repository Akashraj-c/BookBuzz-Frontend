import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import BookList from './pages/BookList'
import BookDetails from './pages/BookDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path={'/register'} element={<Auth register />} />
        <Route path={'/login'} element={<Auth />} />
        <Route path={'/'} element={<BookList />} />
        <Route path={'/bookdetails'} element={<BookDetails />} />
      </Routes>
    </>
  )
}

export default App
