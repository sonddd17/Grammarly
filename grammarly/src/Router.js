import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './PageComponent/MainPage'
import Login from './Auth/Login'
import MyGrammarly from './PageComponent/MyGrammarly'
import Trash from './PageComponent/Trash'
import Account from './PageComponent/Account'
import Premium from './PageComponent/Premium'
import Register from './Auth/Register'
import AboutUs from './PageComponent/about_us/AboutUs'
import SubscriptionPlan from './PageComponent/subscription_plan/SubscriptionPlan'
import Profile from './PageComponent/account/Profile'

import Menu from './PageComponent/Menu'


const Router = () => {
    return (
        <BrowserRouter>
        <div className='container'>
            
            <Routes>
                <Route path='/' element={<MyGrammarly />} />
                <Route path='/login' element={<Login />} />
                <Route path='/mainpage' element={<MainPage />} />
                <Route path='/register' element={<Register />} />
                <Route path="/MyGrammarly" element={<MyGrammarly />} />
                <Route path="/trash" element={<Trash />} />
                <Route path="/account" element={<Account />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about_us" element={<AboutUs />} />
                <Route path="/subscription_plan" element={<SubscriptionPlan />} />
                {/* <Route path="/premium" element={<Premium />} /> */}
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default Router