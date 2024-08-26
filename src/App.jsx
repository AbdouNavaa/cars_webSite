import React from 'react'
import './App.css'
import Auction from './Components/Auction/Auction'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Review from './Components/Review/Review'
import Search from './Components/Search/Search'
import Sellers from './Components/Sellers/Sellers'
import Trending from './Components/Trending/Trending'
import Footer from './Components/Footer/Footer'
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer />
    </div>
  )
}
