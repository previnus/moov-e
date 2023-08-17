import {Footer, Header} from "./components/layouts"
import {Routes, Route} from 'react-router-dom'
import {Home, Trending, WhatsNew, Pricing, Contact, NotFound, Movie} from "./components/pages"


const App = () => {

  return (
    <>
      <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/whatsnew" element={<WhatsNew />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
          
      <Footer />
    </>
  )
}

export default App
