import {Footer, Header} from "./components/layouts"
import {Routes, Route} from 'react-router-dom'
import {Home, Trending, WhatsNew, Pricing, Contact, NotFound} from "./components/pages"


function App() {

  return (
    <>
      <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/whatsnew" element={<WhatsNew />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
          
      <Footer />
    </>
  )
}

export default App
