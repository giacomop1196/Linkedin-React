import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import NavBar from './assets/components/Navbar';
import LinkedinProfileSection from './assets/components/LinkedinProfileSection';
import Footer from './assets/components/Footer';
import MessageBox from './assets/components/MessageBox';
import HomePage from './assets/components/HomePage';
import PostSection from './assets/components/PostSection';


// Componente principale dell'applicazione
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <MessageBox></MessageBox>
        <Routes>
          <Route path='/' element={<PostSection />} />
          <Route path='/profile' element={<LinkedinProfileSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
