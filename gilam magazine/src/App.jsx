import { useState } from 'react'
import { Header } from './header/header'
import { Header2 } from './header2/header2'
import { Hero } from './hero/hero'
import { Service } from './service/service'
import { Service2 } from './service/service2'
import { Footer } from './footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <Header2 />
      <Hero />
      <Service/>
      <Service2 />
      <Footer />
    </>
  )
}

export default App
