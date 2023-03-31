
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

function App() {

  return (
    <div className="App">

      <Header/>
      <main className='min-h-[39rem]'>
        <Blogs/>
        <Questions/>
      </main>
      <Footer/>

        <ToastContainer
        position="top-center"
        autoClose={2000}
        theme={"colored"}
        />
    </div>
  )
}

export default App;
