import heroImg from '../assets/images/hero_school_campus_1791969319257.jpg';
import montessoriImg from '../assets/images/montessori_early_years_1791969319286.jpg';
import scienceImg from '../assets/images/science_stem_lab_1791969320174.jpg';
import libraryImg from '../assets/images/library_scholarship_1791969320309.jpg';
import sportsImg from '../assets/images/sports_campus_life_1791969320456.jpg';
import { AcademicProgram, GalleryItem, Milestone, Testimonial } from '../types';

export const SCHOOL_INFO = {
  name: 'Pearl Hillian School System',
  campus: 'Simly Dam Road Campus, Islamabad',
  tagline: '18 Years of Excellence',
  phone: '0325 6127831',
  phoneRaw: '+923256127831',
  whatsapp: '03256127831',
  whatsappRaw: '923256127831',
  email: 'pearlhillianschoolofficial@gmail.com',
  address: 'Simly Dam Road, Islamabad Capital Territory, Pakistan',
  timings: 'Monday – Friday: 07:45 AM – 02:00 PM',
  officeTimings: 'Monday – Saturday: 08:00 AM – 03:00 PM',
  academicSession: '2025 – 2026',
  studentTeacherRatio: '14:1',
  establishedYear: '2008',
};

export const IMAGES = {
  hero: heroImg,
  montessori: montessoriImg,
  science: scienceImg,
  library: libraryImg,
  sports: sportsImg,
};

export const STATS = [
  { value: '18+', label: 'Years of Excellence', detail: 'Cultivating leadership since 2008' },
  { value: '100%', label: 'Board Examination Pass', detail: 'A+ distinctions in SSC FBISE' },
  { value: '14:1', label: 'Student-Teacher Ratio', detail: 'Personalized intellectual mentorship' },
  { value: '2,500+', label: 'Distinguished Alumni', detail: 'Thriving in top universities & careers' },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'montessori',
    level: 'Early Childhood',
    title: 'Montessori Early Years',
    subtitle: 'Sensory discovery, self-directed exploration, and linguistic foundation',
    ageGroup: 'Ages 2.5 to 5.5 Years',
    description: 'Our world-class Montessori wing provides an immersive, sensory-rich learning environment adhering to authentic Maria Montessori methodologies. Children develop intrinsic curiosity, foundational mathematical reasoning, spatial perception, and bilingual fluency in English and Urdu through hands-on apparatus and caring master educators.',
    features: [
      'Authentic sensorial & practical life apparatus',
      'Early phonics, reading fluency & vocabulary immersion',
      'Mathematical bead & rod conceptual cognition',
      'Peace education, collaborative empathy & refined motor mastery',
    ],
    image: montessoriImg,
    iconName: 'Sparkles',
  },
  {
    id: 'primary',
    level: 'Elementary',
    title: 'Primary School (Grades 1 – 5)',
    subtitle: 'Inquiry-led academic rigor, conceptual depth, and ethical grounding',
    ageGroup: 'Ages 6 to 10 Years',
    description: 'The Primary division bridges playful curiosity into disciplined academic mastery. With balanced emphasis on analytical mathematics, empirical sciences, expressive English literature, social studies, and Islamic ethics, our students build unshakeable conceptual foundations in modern, air-conditioned smart classrooms.',
    features: [
      'Oxford & Cambridge integrated curriculum benchmarks',
      'Hands-on experimental STEM modules & mental arithmetic',
      'Creative writing workshops, elocution & debate fundamentals',
      'Character architecture, sportsmanship & digital literacy',
    ],
    image: libraryImg,
    iconName: 'BookOpen',
  },
  {
    id: 'middle',
    level: 'Junior Secondary',
    title: 'Middle School (Grades 6 – 8)',
    subtitle: 'Critical inquiry, scientific experimentation, and leadership cultivation',
    ageGroup: 'Ages 11 to 13 Years',
    description: 'During these formative transitional years, students engage with accelerated subject-specialist teaching. Rigorous scientific experimentation, advanced algebraic geometry, computer programming fundamentals, and public discourse prepare each learner for high-stakes secondary board certifications.',
    features: [
      'Dedicated physics, chemistry & biology wet-lab sessions',
      'Coding, algorithmic thinking & introductory robotics',
      'Model United Nations (MUN), drama & student leadership councils',
      'Athletic team competition and physical conditioning',
    ],
    image: sportsImg,
    iconName: 'Compass',
  },
  {
    id: 'secondary',
    level: 'Senior Secondary',
    title: 'Senior School (Matric / SSC Stream)',
    subtitle: 'FBISE Board distinction track, career counseling, and academic mastery',
    ageGroup: 'Ages 14 to 16 Years',
    description: 'The Senior School is renowned for consistent top-tier results in the Federal Board (FBISE) examination streams (Pre-Medical, Pre-Engineering, and Computer Science). Equipped with state-of-the-art research laboratories and intensive faculty office hours, we mentor scholars towards Pakistan’s most competitive professional colleges.',
    features: [
      'Comprehensive preparation for SSC Part I & Part II exams',
      'Fully equipped high-precision STEM laboratories',
      'Individualized diagnostic test evaluations & mock exam series',
      'Pre-university guidance, merit scholarship avenues & university career paths',
    ],
    image: scienceImg,
    iconName: 'GraduationCap',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Simly Dam Road Campus Architecture',
    category: 'campus',
    categoryLabel: 'Campus Grounds',
    image: heroImg,
    caption: 'Serene mountain-side campus situated along Simly Dam Road, Islamabad, designed for peaceful focus and intellectual clarity.',
  },
  {
    id: 'gal-2',
    title: 'Montessori Practical Life & Sensorial Work',
    category: 'montessori',
    categoryLabel: 'Montessori Wing',
    image: montessoriImg,
    caption: 'Child-centric sensory apparatus facilitating fine motor mastery, spatial cognition, and joyous self-guided learning.',
  },
  {
    id: 'gal-3',
    title: 'Advanced STEM & Chemistry Laboratories',
    category: 'stem',
    categoryLabel: 'STEM & Labs',
    image: scienceImg,
    caption: 'High-precision scientific equipment, robotics testing benches, and digital microscopes for experiential secondary research.',
  },
  {
    id: 'gal-4',
    title: 'Central Heritage Library & Research Hall',
    category: 'library',
    categoryLabel: 'Library & Study',
    image: libraryImg,
    caption: 'Over 8,000 volumes across sciences, classical literature, and humanities with tranquil individual reading niches.',
  },
  {
    id: 'gal-5',
    title: 'Athletic Pavilion & Green Sports Turf',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: sportsImg,
    caption: 'Spacious athletic grounds hosting football tournaments, cricket leagues, martial arts training, and annual sports galas.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Dr. Tariq Mahmood',
    role: 'Parent of Class 9 Scholar',
    studentGrade: 'Senior Secondary',
    quote: 'Pearl Hillian School System combines genuine academic rigor with exemplary moral values. The Simly Dam Road campus provides a safe, serene, and academically invigorating environment where my son has flourished with top FBISE honors.',
    rating: 5,
  },
  {
    id: 't-2',
    author: 'Ayesha Farooq',
    role: 'Parent of Montessori & Grade 3 Students',
    studentGrade: 'Montessori & Primary',
    quote: 'The transformation in our daughter’s confidence and vocabulary after joining the Montessori program was phenomenal. The teachers are deeply caring, highly qualified, and communicate with parents with utmost transparency.',
    rating: 5,
  },
  {
    id: 't-3',
    author: 'Engr. Kamran Siddiqui',
    role: 'Parent of Grade 7 Student',
    studentGrade: 'Middle School',
    quote: 'Eighteen years of institutional excellence is immediately evident in their discipline and organizational structure. The modern science labs and sports facilities stand far ahead of traditional schools in the region.',
    rating: 5,
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: '2008',
    title: 'Foundation of Pearl Hillian',
    description: 'Established with a pioneering vision to bring world-standard holistic education and refined moral stewardship to the capital region.',
  },
  {
    year: '2014',
    title: 'Montessori Center of Excellence',
    description: 'Inaugurated dedicated early-years specialized learning wings with imported sensorial apparatus and certified early-childhood educators.',
  },
  {
    year: '2019',
    title: 'Modern Science & Innovation Wing',
    description: 'Commissioned full-scale physics, chemistry, biology, and computer science research suites with digital testing facilities.',
  },
  {
    year: '2026',
    title: '18 Years of Academic Distinction',
    description: 'Celebrating nearly two decades of educational leadership at Simly Dam Road Campus, with 100% board examination distinctions and thousands of alumni.',
  },
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Submit Inquiry / Online Application',
    description: 'Fill out our streamlined online application or visit our Simly Dam Road Campus admissions office in person.',
  },
  {
    step: '02',
    title: 'Campus Tour & Interactive Assessment',
    description: 'Schedule a tailored campus walk-through with our academic team, followed by an age-appropriate cognitive and foundational assessment.',
  },
  {
    step: '03',
    title: 'Parent & Scholar Interview',
    description: 'A cordial dialogue with the Academic Principal to discuss mutual expectations, the child’s unique aptitudes, and school ethos.',
  },
  {
    step: '04',
    title: 'Formal Offer & Enrolment',
    description: 'Receive the official admission offer package, complete document verification, and welcome your child into the Pearl Hillian family.',
  },
];

export const FAQS = [
  {
    q: 'What curriculum does Pearl Hillian School System follow?',
    a: 'We offer an integrated modern curriculum: authentic Montessori methodology for early years, British Cambridge-aligned foundational benchmarks for Primary and Middle schools, and the Federal Board of Intermediate and Secondary Education (FBISE) stream for Secondary Matriculation.',
  },
  {
    q: 'Where is the Simly Dam Road Campus located?',
    a: 'The campus is located along Simly Dam Road, Islamabad, offering a peaceful, green environment away from congested commercial traffic while remaining easily accessible for families from Bhara Kahu, Park View City, Chak Shahzad, and surrounding Islamabad sectors.',
  },
  {
    q: 'What is the student-to-teacher ratio at Pearl Hillian?',
    a: 'We maintain a strict maximum ratio of 14:1 across all classrooms, ensuring every child receives individualized attention, focused diagnostics, and personal mentorship.',
  },
  {
    q: 'What security and safety protocols are maintained on campus?',
    a: 'Student safety is paramount. Our campus features 24/7 CCTV surveillance, biometric security clearance, trained armed personnel, perimeter monitoring, and strict child sign-in/sign-out procedures.',
  },
  {
    q: 'How can parents apply for admissions?',
    a: 'Admissions are currently open for Session 2025–2026. You can submit the online application on this portal, connect directly with our admissions counselor via WhatsApp (0325 6127831), or call us at 0325 6127831 to reserve a campus tour.',
  },
];
