import { type LeaderboardStudentEntry } from '../queries';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/StudentCard.scss';

interface StudentCardProps {
  student: LeaderboardStudentEntry;
  rank: number;
}

const StudentCard = ({ student, rank }: StudentCardProps) => {
  const { language, t } = useLanguage();

  const getLocalizedName = (name: { ar: string; en: string }) => {
    return language === 'ar' ? name.ar : name.en;
  };

  return (
    <div className="student-card">
      <div className="student-card-rank">{rank}</div>
      <div className="student-card-avatar">
        {student.studentImage ? (
          <img
            src={student.studentImage}
            alt={getLocalizedName(student.name)}
            className="student-card-avatar-img"
          />
        ) : (
          <span className="student-card-avatar-placeholder">
            {getLocalizedName(student.name).charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div className="student-card-info">
        <h4 className="student-card-name">{getLocalizedName(student.name)}</h4>
        <div className="student-card-details">
          <div className="student-card-detail-item">
            <img src="/grade.svg" alt={t('grade')} className="student-card-icon" />
            <span className="student-card-detail-text">
              {t('grade')} {student.grade}
            </span>
          </div>
          <div className="student-card-detail-item">
            <img src="/section.svg" alt={t('section')} className="student-card-icon" />
            <span className="student-card-detail-text">
              {t('section')} {student.section}
            </span>
          </div>
        </div>
      </div>
      <span className="student-card-points">{student.points} PT</span>
    </div>
  );
};

export default StudentCard;
