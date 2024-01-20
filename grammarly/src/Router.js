import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './PageComponent/MainPage'
import Login from './Auth/Login'
import MyGrammarly from './PageComponent/MyGrammarly'
import Trash from './PageComponent/Trash'
import Account from './PageComponent/Account'
import Premium from './PageComponent/Premium'
import Register from './Auth/Register'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/mainpage/*' element={<MainPage />} />
                <Route path='/register' element={<Register />} />
                <Route path="/MyGrammarly" element={<MyGrammarly />} />
                <Route path="/trash" element={<Trash />} />
                <Route path="/account" element={<Account />} />
                <Route path="/premium" element={<Premium />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router