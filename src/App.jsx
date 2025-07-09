import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Experience from './pages/experiences'
import Academics from './pages/academics'
import Footer from './components/Footer'

import './App.css'
import './styles/style.scss'

function App() {

  return (
    <>
      <Header />
      <main id="main">
        <Aboutme />
        <div className='spacetop' id='experience'>
          <Experience />
        </div>        
        <div className='spacetop' id='academic'>
          <Academics />
        </div>
        
      </main>
      <Footer />
    </>
  )
}

export default App
