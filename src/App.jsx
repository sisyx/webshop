import { useContext, useEffect, useReducer, useState } from 'react'
import Footer from './components/Footer'
import Product from './pages/Product'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomeLayout from './Layouts/HomeLayout'
import { StateContext } from './Contexts/Conetxts'
import CardPage from './pages/CardPage'
import Authentication from './pages/Authentication'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import ThanksPage from './pages/ThanksPage'
import Header from './components/Header'

function reducer(state, action) {
  switch (action.type) {
    case 'addToCart': return {...state, cart: [...state.cart, action.payload]}
    case 'removeProduct': return {...state, cart: [...state.cart.filter(Product => Product.id !== action.payload.id)]}
    case 'toggleProductCount': return {
      ...state,
      cart: state.cart.map(product => product.id === action.payload.id ?
        {...product, count: product.count + action.payload.count}  
        : product)
    }
    case "pay": return {...state, cart: []}
    default: state
}
}
function App() {

  // const [dispatch, state] = useReducer(initialState, reducer);
  const [state, dispatch] = useReducer(reducer, useContext(StateContext))
  const navigate = useNavigate();

  function goBack(event) {
    navigate(-1);
  }


  useEffect(function () {
    localStorage.setItem('data', JSON.stringify(state))
  }, [state])

  return (
    <>
      <Header cartCount={state.cart.length} />
        <StateContext.Provider value={{state, dispatch, goBack}}>
        <Routes >
          <Route index element={<HomeLayout />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<CardPage />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/shipping' element={<ShippingPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/thanks' element={<ThanksPage />} />
          {/* <Authentication /> */}
          {/* <CardPage /> */}
          {/* <Product cart={state.cart} product={state.products.at(2)} dispatch={dispatch}/> */}
          {/* <PaymentPage /> */}
        </Routes>
      </StateContext.Provider>
      <Footer />
    </>
  )
}

export default App
