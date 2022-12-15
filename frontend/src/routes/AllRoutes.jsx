import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductsPage/ProductPage'
import SingleProduct from '../pages/ProductsPage/SingleProduct'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/makeup' element={<ProductPage/>}  />
            <Route path='/singleprod' element={<SingleProduct/>} />
            <Route path='' />
            <Route path='' />
            <Route path='' />
        </Routes>
    )
}

export default AllRoutes