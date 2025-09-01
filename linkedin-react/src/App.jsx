// Importazione dei file CSS necessari
import './App.css'
// Importazione di Bootstrap per lo styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Importazione delle icone Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// Importazione del componente ProfileSettingsCard
import ProfileSettingsCard from './components/ProfileSettingsCard';

// Componente principale dell'applicazione
function App() {

  return (
    <>
      {/* Rendering del componente ProfileSettingsCard che mostra le impostazioni del profilo */}
      <ProfileSettingsCard />
    </>
  )
}

export default App
