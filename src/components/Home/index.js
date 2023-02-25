import Header from '../Header'
import Footer from '../Footer'
import OriginalsSlickComponent from '../OriginalsSlickComponent'
import TrendingSlickComponent from '../TrendingSlickComponent'

import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <h1 className="slick-movies-category-heading">Trending Now</h1>
    <TrendingSlickComponent />
    <h1 className="slick-movies-category-heading">Originals</h1>
    <OriginalsSlickComponent />
    <Footer />
  </div>
)

export default Home
