import { useState } from 'react'
      
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeflex/primeflex.css'; // flex
import ComiteComponent from './components/ComiteComponent';
import ComiteSection from './components/ComiteSection';
import ImageDisplayer from './components/ImageDisplayer';
import HeroSection from './components/HeroSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HeroSection />
    </>
  )
}

export default App
