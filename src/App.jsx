import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ContentPage from './pages/ContentPage/ContentPage'

function App() {

  return (
    <>
      <div className="App">
        <Navbar/>
        <ContentPage/>
        <Footer/>
      </div>
    </>
  )
}

export default App
