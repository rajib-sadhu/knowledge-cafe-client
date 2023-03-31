import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header/>
      <main className='min-h-[39rem]'>
        <Blogs/>
      </main>
      <Footer/>

        <ToastContainer/>
    </div>
  )
}

export default App;
