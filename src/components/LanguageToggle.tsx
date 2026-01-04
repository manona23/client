import { useLanguage } from '../contexts/LanguageContext';
import '../styles/LanguageToggle.scss';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle language">
      <span className={language === 'en' ? 'active' : ''}>EN</span>
      <span className="separator">|</span>
      <span className={language === 'ar' ? 'active' : ''}>AR</span>
    </button>
  );
};

export default LanguageToggle;
