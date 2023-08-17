import {Footer, Header} from "./components/layouts"
import {Routes, Route} from 'react-router-dom'
import {Home, Trending, Upcoming, Pricing, Contact, NotFound, Movie, Search} from "./components/pages"


const App = () => {

  return (
    <>
      <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
          
      <Footer />
    </>
  )
}

export default App
