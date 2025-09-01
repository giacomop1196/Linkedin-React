import React, { useState } from 'react';

// Componente che crea una card per le impostazioni del profilo LinkedIn
// Posizionata nella sidebar destra come nell'interfaccia originale
const ProfileSettingsCard = () => {
  // Stato per gestire la lingua del profilo - ora con localStorage
  const [profileLanguage, setProfileLanguage] = useState(() => {
    // Carica la lingua salvata dal localStorage o usa 'Italiano' come default
    return localStorage.getItem('linkedinProfileLanguage') || 'Italiano';
  });
  
  // Stato per gestire l'URL del profilo pubblico - ora con localStorage
  const [publicProfileUrl, setPublicProfileUrl] = useState(() => {
    // Carica l'URL salvato dal localStorage o usa l'URL di default
    return localStorage.getItem('linkedinProfileUrl') || 'www.linkedin.com/in/giacomo-pillitteri';
  });
  
  // Stato per gestire se il modal di modifica lingua è aperto
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  // Stato per gestire se il modal di modifica URL è aperto
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  // Stato per gestire l'input temporaneo dell'URL
  const [tempUrl, setTempUrl] = useState('');

  // Array delle lingue disponibili
  const availableLanguages = [
    'Italiano',
    'English',
    'Español',
    'Français',
    'Deutsch',
    'Português',
    '日本語',
    '한국어',
    '中文'
  ];

  // Sistema di traduzioni per tutte le lingue
  const translations = {
    'Italiano': {
      profileLanguage: 'Lingua del profilo',
      publicProfile: 'Profilo pubblico e URL',
      selectLanguage: 'Seleziona lingua del profilo',
      editUrl: 'Modifica URL del profilo',
      urlPlaceholder: 'Inserisci il tuo URL del profilo LinkedIn',
      save: 'Salva',
      cancel: 'Annulla',
      editProfileLanguage: 'Modifica lingua del profilo',
      editPublicProfile: 'Modifica profilo pubblico e URL'
    },
    'English': {
      profileLanguage: 'Profile language',
      publicProfile: 'Public profile and URL',
      selectLanguage: 'Select profile language',
      editUrl: 'Edit profile URL',
      urlPlaceholder: 'Enter your LinkedIn profile URL',
      save: 'Save',
      cancel: 'Cancel',
      editProfileLanguage: 'Edit profile language',
      editPublicProfile: 'Edit public profile and URL'
    },
    'Español': {
      profileLanguage: 'Idioma del perfil',
      publicProfile: 'Perfil público y URL',
      selectLanguage: 'Seleccionar idioma del perfil',
      editUrl: 'Editar URL del perfil',
      urlPlaceholder: 'Ingresa tu URL del perfil de LinkedIn',
      save: 'Guardar',
      cancel: 'Cancelar',
      editProfileLanguage: 'Editar idioma del perfil',
      editPublicProfile: 'Editar perfil público y URL'
    },
    'Français': {
      profileLanguage: 'Langue du profil',
      publicProfile: 'Profil public et URL',
      selectLanguage: 'Sélectionner la langue du profil',
      editUrl: 'Modifier l\'URL du profil',
      urlPlaceholder: 'Entrez votre URL de profil LinkedIn',
      save: 'Enregistrer',
      cancel: 'Annuler',
      editProfileLanguage: 'Modifier la langue du profil',
      editPublicProfile: 'Modifier le profil public et l\'URL'
    },
    'Deutsch': {
      profileLanguage: 'Profilsprache',
      publicProfile: 'Öffentliches Profil und URL',
      selectLanguage: 'Profilsprache auswählen',
      editUrl: 'Profil-URL bearbeiten',
      urlPlaceholder: 'Geben Sie Ihre LinkedIn-Profil-URL ein',
      save: 'Speichern',
      cancel: 'Abbrechen',
      editProfileLanguage: 'Profilsprache bearbeiten',
      editPublicProfile: 'Öffentliches Profil und URL bearbeiten'
    },
    'Português': {
      profileLanguage: 'Idioma do perfil',
      publicProfile: 'Perfil público e URL',
      selectLanguage: 'Selecionar idioma do perfil',
      editUrl: 'Editar URL do perfil',
      urlPlaceholder: 'Digite sua URL do perfil do LinkedIn',
      save: 'Salvar',
      cancel: 'Cancelar',
      editProfileLanguage: 'Editar idioma do perfil',
      editPublicProfile: 'Editar perfil público e URL'
    },
    '日本語': {
      profileLanguage: 'プロフィール言語',
      publicProfile: '公開プロフィールとURL',
      selectLanguage: 'プロフィール言語を選択',
      editUrl: 'プロフィールURLを編集',
      urlPlaceholder: 'LinkedInプロフィールURLを入力してください',
      save: '保存',
      cancel: 'キャンセル',
      editProfileLanguage: 'プロフィール言語を編集',
      editPublicProfile: '公開プロフィールとURLを編集'
    },
    '한국어': {
      profileLanguage: '프로필 언어',
      publicProfile: '공개 프로필 및 URL',
      selectLanguage: '프로필 언어 선택',
      editUrl: '프로필 URL 편집',
      urlPlaceholder: 'LinkedIn 프로필 URL을 입력하세요',
      save: '저장',
      cancel: '취소',
      editProfileLanguage: '프로필 언어 편집',
      editPublicProfile: '공개 프로필 및 URL 편집'
    },
    '中文': {
      profileLanguage: '个人资料语言',
      publicProfile: '公开个人资料和网址',
      selectLanguage: '选择个人资料语言',
      editUrl: '编辑个人资料网址',
      urlPlaceholder: '输入您的LinkedIn个人资料网址',
      save: '保存',
      cancel: '取消',
      editProfileLanguage: '编辑个人资料语言',
      editPublicProfile: '编辑公开个人资料和网址'
    }
  };

  // Funzione per ottenere la traduzione corrente
  const getTranslation = (key) => {
    return translations[profileLanguage]?.[key] || translations['Italiano'][key];
  };

  // Funzione per gestire il cambio di lingua con salvataggio in localStorage
  const handleLanguageChange = (newLanguage) => {
    setProfileLanguage(newLanguage);
    // Salva la nuova lingua nel localStorage
    localStorage.setItem('linkedinProfileLanguage', newLanguage);
    setIsLanguageModalOpen(false);
  };

  // Funzione per aprire il modal di modifica lingua
  const openLanguageModal = () => {
    setIsLanguageModalOpen(true);
  };

  // Funzione per aprire il modal di modifica URL
  const openUrlModal = () => {
    setTempUrl(publicProfileUrl);
    setIsUrlModalOpen(true);
  };

  // Funzione per salvare il nuovo URL con salvataggio in localStorage
  const handleSaveUrl = () => {
    setPublicProfileUrl(tempUrl);
    // Salva il nuovo URL nel localStorage
    localStorage.setItem('linkedinProfileUrl', tempUrl);
    setIsUrlModalOpen(false);
  };

  // Funzione per chiudere il modal URL senza salvare
  const handleCancelUrl = () => {
    setIsUrlModalOpen(false);
  };

  return (
    // Container principale con posizione fissa nella sidebar destra
    // top: 80px per posizionarlo sotto l'header, right: 24px per il margine destro
    <div className="position-fixed" style={{ top: '80px', right: '600px', width: '300px', zIndex: 10 }}>
      {/* Card principale con ombra leggera per dare profondità */}
      <div className="card shadow-sm">
        {/* Corpo della card con padding ridotto per un look più compatto */}
        <div className="card-body p-3">
          
          {/* Prima sezione: Lingua del profilo */}
          <div className="mb-3">
            {/* Header della sezione con titolo e pulsante di modifica */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              {/* Titolo della sezione in grassetto e colore scuro - ora tradotto */}
              <h6 className="mb-0 fw-semibold text-dark">{getTranslation('profileLanguage')}</h6>
              {/* Pulsante di modifica con icona matita - cliccabile per cambiare lingua */}
              <button 
                className="btn btn-link p-1 text-muted"
                onClick={openLanguageModal}
                title={getTranslation('editProfileLanguage')}
              >
                <i className="bi bi-pencil"></i>
              </button>
            </div>
            {/* Valore della lingua del profilo - ora dinamico e persistente */}
            <p className="mb-0 text-dark">{profileLanguage}</p>
          </div>
          
          {/* Separatore orizzontale tra le sezioni */}
          <hr className="my-3" />
          
          {/* Seconda sezione: Profilo pubblico e URL */}
          <div>
            {/* Header della sezione con titolo e pulsante di modifica */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              {/* Titolo della sezione in grassetto e colore scuro - ora tradotto */}
              <h6 className="mb-0 fw-semibold text-dark">{getTranslation('publicProfile')}</h6>
              {/* Pulsante di modifica con icona matita - cliccabile per modificare URL */}
              <button 
                className="btn btn-link p-1 text-muted"
                onClick={openUrlModal}
                title={getTranslation('editPublicProfile')}
              >
                <i className="bi bi-pencil"></i>
              </button>
            </div>
            {/* URL del profilo pubblico LinkedIn - ora dinamico e persistente */}
            <p className="mb-0 text-dark">{publicProfileUrl}</p>
          </div>
        </div>
      </div>

      {/* Modal per la selezione della lingua */}
      {isLanguageModalOpen && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              {/* Header del modal */}
              <div className="modal-header">
                <h5 className="modal-title">{getTranslation('selectLanguage')}</h5>
                {/* Pulsante per chiudere il modal */}
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setIsLanguageModalOpen(false)}
                ></button>
              </div>
              
              {/* Corpo del modal con la lista delle lingue */}
              <div className="modal-body">
                <div className="list-group">
                  {availableLanguages.map((language) => (
                    <button
                      key={language}
                      className={`list-group-item list-group-item-action ${
                        language === profileLanguage ? 'active' : ''
                      }`}
                      onClick={() => handleLanguageChange(language)}
                    >
                      {language}
                      {/* Icona di spunta per la lingua attualmente selezionata */}
                      {language === profileLanguage && (
                        <i className="bi bi-check float-end"></i>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Footer del modal */}
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setIsLanguageModalOpen(false)}
                >
                  {getTranslation('cancel')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal per la modifica dell'URL */}
      {isUrlModalOpen && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              {/* Header del modal */}
              <div className="modal-header">
                <h5 className="modal-title">{getTranslation('editUrl')}</h5>
                {/* Pulsante per chiudere il modal */}
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleCancelUrl}
                ></button>
              </div>
              
              {/* Corpo del modal con input per l'URL */}
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="profileUrl" className="form-label">
                    {getTranslation('publicProfile')}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="profileUrl"
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    placeholder={getTranslation('urlPlaceholder')}
                  />
                </div>
              </div>
              
              {/* Footer del modal */}
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={handleCancelUrl}
                >
                  {getTranslation('cancel')}
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={handleSaveUrl}
                >
                  {getTranslation('save')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettingsCard;