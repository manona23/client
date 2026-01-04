import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/LeaderboardSkeleton.scss';

const LeaderboardSkeleton = () => {
  const { language } = useLanguage();

  return (
    <div
      className={`leaderboard-container lang-${language}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      lang={language}
    >
      <LanguageToggle />
      <div className="logo-container">
        <div className="skeleton-logo"></div>
      </div>

      <div className="school-header">
        <div className="skeleton-school-image"></div>
        <div className="skeleton-school-info">
          <div className="skeleton-title"></div>
          <div className="skeleton-school-name"></div>
        </div>
      </div>

      <div className="top-three">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`top-student skeleton-top-student ${index === 0 ? 'first' : index === 1 ? 'second' : 'third'}`}
          >
            <div className="skeleton-avatar-wrapper">
              <div className="skeleton-avatar"></div>
            </div>
            <div className="skeleton-student-name"></div>
            <div className="skeleton-place-badge"></div>
            <div className="skeleton-divider-container">
              <div className="skeleton-divider"></div>
              <div
                className={`skeleton-divider-text ${index === 0 ? 'first' : index === 1 ? 'second' : 'third'}`}
              ></div>
            </div>
            <div className="skeleton-details">
              <div className="skeleton-detail-item"></div>
              <div className="skeleton-detail-item"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="students-list">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="student-card skeleton-student-card">
            <div className="skeleton-rank"></div>
            <div className="skeleton-card-avatar"></div>
            <div className="skeleton-card-info">
              <div className="skeleton-card-name"></div>
              <div className="skeleton-card-details">
                <div className="skeleton-card-detail-item"></div>
                <div className="skeleton-card-detail-item"></div>
              </div>
            </div>
            <div className="skeleton-card-points"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardSkeleton;
