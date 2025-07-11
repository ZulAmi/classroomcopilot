export interface LessonPlan {
  day: number;
  title: string;
  objectives: string[];
  materials: string[];
  activities: Activity[];
  assessment: string;
  homework?: string;
}

export interface Activity {
  name: string;
  duration: string;
  description: string;
  type: 'introduction' | 'main' | 'practice' | 'review' | 'wrap-up';
}

export interface WeeklyLessonPlan {
  topic: string;
  ageGroup: string;
  overview: string;
  lessons: LessonPlan[];
}

export interface LessonPlanRequest {
  topic: string;
  ageGroup: number; // 5-12
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'teacher' | 'administrator';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}
