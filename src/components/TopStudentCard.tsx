import { type LeaderboardStudentEntry } from '../queries';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/StudentCard.scss';

interface StudentCardProps {
  student: LeaderboardStudentEntry;
  index: number;
}

const getRankClass = (index: number) => {
  if (index === 0) return 'first';
  if (index === 1) return 'second';
  if (index === 2) return 'third';
  return '';
};

const TopStudentCard = ({ student, index }: StudentCardProps) => {
  const { language, t } = useLanguage();

  const getPlaceText = (index: number) => {
    if (index === 0) return t('first place');
    if (index === 1) return t('second place');
    if (index === 2) return t('third place');
    return '';
  };

  const getLocalizedName = (name: { ar: string; en: string }) => {
    return language === 'ar' ? name.ar : name.en;
  };

  return (
    <div className={`top-student-card ${getRankClass(index)}`}>
      <div key={student.id} className="top-student">
        <div className="student-avatar-wrapper">
          {student.studentImage ? (
            <>
              <img src="/crown.svg" alt="Crown" className={`crown-icon ${getRankClass(index)}`} />
              <img
                src={student.studentImage}
                alt={getLocalizedName(student.name)}
                className={`student-avatar ${getRankClass(index)}`}
              />
            </>
          ) : (
            <span className="student-avatar-placeholder">
              {getLocalizedName(student.name).charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <h3 className="student-name">{getLocalizedName(student.name)}</h3>
        <span className="place-badge">{getPlaceText(index)}</span>
        <div className="student-details-divider-container">
          <hr className="student-details-divider" />
          <span className={`student-details-divider-text ${getRankClass(index)}`}>{student.points} PT</span>
        </div>
        <div className="student-details">
          <div className="detail-item">
            <img src="/grade.svg" alt={t('grade')} className="detail-icon" />
            <div className="detail-text">
              <span className="detail-text-label">{t('grade')} </span> {student.grade}
            </div>
          </div>
          <div className="detail-item">
            <img src="/section.svg" alt={t('section')} className="detail-icon" />
            <div className="detail-text">
              <span className="detail-text-label">{t('section')} </span> {student.section}
            </div>
          </div>
        </div>
      </div>
      <span className={`top-student-rank ${getRankClass(index)}`}>{index + 1}</span>
    </div>
  );
};

export default TopStudentCard;
