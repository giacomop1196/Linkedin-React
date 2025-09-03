// Importazione dei file CSS necessari
import './App.css'
// Importazione di Bootstrap per lo styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Importazione delle icone Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// Importazione del componente RightSidebar
import NavBar from './assets/components/Navbar';
import LinkedinProfileSection from './assets/components/LinkedinProfileSection';
import Footer from './assets/components/Footer';
import MessageBox from './assets/components/MessageBox';
import HomePage from './assets/components/HomePage';


// Componente principale dell'applicazione
function App() {
  return (
    <>
     <NavBar/>
     <MessageBox></MessageBox>
     <HomePage/>
     <LinkedinProfileSection/>
     <Footer/>
    </>
  );
}

export default App;
