import { HashRouter, Routes, Route } from 'react-router'
import Home from './pages/HomePage'
import HeaderBar from './components/HeaderBar'


function App() {

  return (
    <>
      <HashRouter basename='/'>
        <HeaderBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </HashRouter>
    </>

  )
}

export default App
