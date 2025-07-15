import Header from './components/Header'
import Aboutme from './components/Aboutme'
import Experience from './pages/experiences'
import Academics from './pages/academics'
import Footer from './components/Footer'

import './App.css'
import './styles/style.scss'

function App() {

  return (
    <div className="min-h-screen w-full bg-[#fafafa] absolute fondo">
      <div 
        className='absolute inset-0 z-0 poionter-events-none'
        style = {{ 
          backgroundImage : `
            repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)
          `,  
        backgroundSize: "40px 40px"
        }}
      />
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
    </div>
  )
}

export default App
