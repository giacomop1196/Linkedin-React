// Importazione dei file CSS necessari
import './App.css'
// Importazione di Bootstrap per lo styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Importazione delle icone Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// Importazione del componente RightSidebar
import RightSidebar from './components/RightSidebar';
import NavBar from './assets/components/Navbar';
import LinkedinProfileSection from './assets/components/LinkedinProfileSection';
import Footer from './assets/components/Footer';



// Componente principale dell'applicazione
function App() {
  return (
    <>
      {/* Rendering del componente RightSidebar che mostra la sidebar destra in stile LinkedIn */}
      <RightSidebar />
     <NavBar/>
     <LinkedinProfileSection/>
     <Footer/>
    </>
  );
}

export default App;
