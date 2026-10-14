export type PageTab = 'home' | 'about' | 'academics' | 'admissions' | 'campus-life' | 'contact';

export interface AcademicProgram {
  id: string;
  level: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  description: string;
  features: string[];
  image: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'campus' | 'montessori' | 'stem' | 'sports' | 'library';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  studentGrade: string;
  quote: string;
  rating: number;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface AdmissionFormState {
  studentName: string;
  dateOfBirth: string;
  gender: string;
  gradeApplyingFor: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  residentialArea: string;
  previousSchool: string;
  notes: string;
  preferredCampusVisitDate: string;
}
