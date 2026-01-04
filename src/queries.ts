import { gql } from '@apollo/client';

// GraphQL query for Apollo Client
export const GET_STUDENTS_LEADERBOARD = gql`
  query GetStudentsLeaderboard($schoolId: SchoolID!) {
    studentsLeaderboard(schoolId: $schoolId) {
      school {
        id
        name {
          ar
          en
        }
        image
      }
      students {
        id
        name {
          ar
          en
        }
        grade
        section
        schoolName {
          ar
          en
        }
        points
        studentImage
      }
    }
  }
`;

// TypeScript types for the query response
export interface LocalizedName {
  ar: string;
  en: string;
}

export interface School {
  id: string;
  name: LocalizedName;
  image: string | null;
}

export interface LeaderboardStudentEntry {
  id: string;
  name: LocalizedName;
  grade: string;
  section: string;
  schoolName: LocalizedName;
  points: number;
  studentImage: string | null;
}

export interface SchoolScopedLeaderboardData {
  school: School;
  students: LeaderboardStudentEntry[];
}

export interface GetStudentsLeaderboardResponse {
  data: {
    studentsLeaderboard: SchoolScopedLeaderboardData;
  };
}
