import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='layout-container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/housing/:id' element={<Housing />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
