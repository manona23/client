import { useQuery } from '@apollo/client/react';
import { GET_STUDENTS_LEADERBOARD, type SchoolScopedLeaderboardData } from '../queries';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import StudentCard from './StudentCard';
import '../styles/Leaderboard.scss';
import '../styles/LanguageToggle.scss';
import TopStudentCard from './TopStudentCard';
import LeaderboardSkeleton from './LeaderboardSkeleton';

const Leaderboard = () => {
  const { language, t } = useLanguage();

  const { loading, error, data } = useQuery<{ studentsLeaderboard: SchoolScopedLeaderboardData }>(
    GET_STUDENTS_LEADERBOARD,
    {
      variables: {
        schoolId: '1',
      },
    }
  );

  if (loading) {
    return <LeaderboardSkeleton />;
  }

  if (error) {
    return (
      <div className="leaderboard-container">
        <LanguageToggle />
        <span className="error">{error.message}</span>
      </div>
    );
  }

  if (!data?.studentsLeaderboard) {
    return (
      <div className="leaderboard-container">
        <LanguageToggle />
        <span className="error">{t('No data available')}</span>
      </div>
    );
  }

  const { school, students } = data.studentsLeaderboard;

  const sortedStudents = [...students].sort((a, b) => b.points - a.points);

  const topThree = sortedStudents.slice(0, 3);
  const rest = sortedStudents.slice(3);

  const getLocalizedName = (name: { ar: string; en: string }) => {
    return language === 'ar' ? name.ar : name.en;
  };

  return (
    <div
      className={`leaderboard-container lang-${language}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      lang={language}
    >
      <LanguageToggle />
      <div className="logo-container">
        <img src="/logo.svg" alt="Logo" className="logo" />
      </div>

      <div className="school-header">
        {school.image && (
          <img src={school.image} alt={getLocalizedName(school.name)} className="school-image" />
        )}
        <div>
          <h2 className="leaderboard-title">{t('leaderboard')}</h2>
          <h1 className="school-name">{getLocalizedName(school.name)}</h1>
        </div>
      </div>

      <div className="top-three">
        {topThree.map((student, index) => (
          <TopStudentCard key={student.id} student={student} index={index} />
        ))}
      </div>

      <div className="students-list">
        {rest.map((student, index) => (
          <StudentCard key={student.id} student={student} rank={index + 4} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
