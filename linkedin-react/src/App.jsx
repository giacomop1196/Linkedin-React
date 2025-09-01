// Importazione dei file CSS necessari
import './App.css'
// Importazione di Bootstrap per lo styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Importazione delle icone Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// Importazione del componente Footer
import Footer from './components/Footer';
// Importazione del componente RightSidebar
import RightSidebar from './components/RightSidebar';

// Componente principale dell'applicazione
function App() {
  return (
    <>
      {/* Rendering del componente RightSidebar che mostra la sidebar destra in stile LinkedIn */}
      <RightSidebar />
      {/* Rendering del componente Footer */}
      <Footer />
    </>
  );
}

export default App;
