import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'namanjain2136@gmail.com',
    fullName: 'NAMAN JAIN',

    resumePath: '/resume.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/namanjain2136' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/naman-jain-17b19730b',
    },
    { name: 'instagram', url: 'https://instagram.com/Krazzyy.naman' },
];

export const MY_STACK = {
  'Programming Languages': [
    { name: 'Java', icon: '/logo/java.svg' },
    { name: 'Python', icon: '/logo/python.svg' },
    { name: 'JavaScript', icon: '/logo/javascript.svg' },
    { name: 'C/C++', icon: '/logo/cpp.svg' },
  ],

  'Frameworks & Libraries': [
    { name: 'React', icon: '/logo/react.svg' },
    { name: 'Next.js', icon: '/logo/nextjs.svg' },
    { name: 'Tailwind CSS', icon: '/logo/tailwindcss.svg' },
  ],

  'Databases': [
    { name: 'MySQL', icon: '/logo/mysql.svg' },
    { name: 'MongoDB', icon: '/logo/mongodb.svg' },
    { name: 'Redis', icon: '/logo/redis.svg' },
  ],

  'Cloud & Tools': [
    { name: 'GitHub', icon: '/logo/github-circle.svg' },
    { name: 'VS Code', icon: '/logo/vscode.svg' },
    { name: 'Vercel', icon: '/logo/vercel-circle.svg' },
  ],
  'AI-Assisted Development': [
    { name: 'GitHub Copilot', icon: '/logo/githubcopilot.svg' },
    { name: 'Cursor AI', icon: '/logo/cursor.svg' },
    { name: 'Antigravity', icon: '/logo/antigravity.svg' },
]

};

export const PROJECTS: IProject[] = [
    {
        title: 'DoctorNow',
        slug: 'doctornow',
        sourceCode: 'https://github.com/namanjain2136/DoctorNow',
        description:
            'DoctorNow is a web healthcare platform for appointment booking, medicine ordering, and secure medical report storage. It combines scheduling, e-commerce, and protected data workflows into one smooth experience. The system is built for accessibility, scalability, and reliable healthcare operations.',
        techStack: ['React', 'Python', 'SQL', 'HTML-CSS', 'JavaScript'],
        thumbnail: '/projects/thumbnail/doctornow.png',
    },
    {
        title: 'Adaptense',
        slug: 'adaptense',
        sourceCode: 'https://github.com/namanjain2136/adaptense',
        description:
            'Context-aware gesture interaction framework for virtual learning using computer vision. Designed a Unity-based learning environment integrating MediaPipe hand tracking to recognize gestures and adapt interactions using contextual signals such as gesture confidence, failed attempts, task stage and user interaction history.',
        techStack: [
            'Unity',
            'MediaPipe',
            'Computer Vision',
            'C#',
            'Python',
        ],
        thumbnail: '/projects/thumbnail/adaptense.jpeg',
    },
    {
        title: 'AutoMetrics',
        slug: 'autometrics',
        sourceCode: 'https://github.com/namanjain2136/autometrics',
        description:
            'Automotive Sales Analytics Platform: Developed a data analytics project for analyzing automotive sales, customer, vehicle and dealership data to identify sales trends, product performance and business patterns. Structured data processing and analysis workflows to generate meaningful KPIs and interactive visualizations for business oriented decision making.',
        techStack: [
            'Python',
            'Pandas',
            'SQL',
            'Data Analytics',
            'Power BI',
        ],
        thumbnail: '/projects/thumbnail/autometrics.png',
    },
    {
        title: 'Quizeria',
        slug: 'quizeria',
        sourceCode: 'https://github.com/namanjain2136/Quizeria',
        description:
            'Quizeria is a secure web-based quiz platform designed for efficient online assessments. It provides role-based access for admins and students with a custom interface built from scratch. The modular architecture keeps it lightweight today and ready for future upgrades like persistent storage and analytics.',
        techStack: [
            'Spring Boot',
            'Thymeleaf',
            'Java',
            'HTML-CSS',
        ],
        thumbnail: '/projects/thumbnail/quizeria.png',
    },
    {
        title: 'SR Monitor',
        slug: 'sr-monitor',
        sourceCode: 'https://github.com/namanjain2136/System-resource-monitor',
        description:
            'System Resource Monitor(SR Monitor) is a lightweight terminal tool for tracking CPU, memory, disk, and network metrics in real time. It presents live performance data through an interactive command-line dashboard for quick diagnostics. The tool is optimized for low overhead and practical day-to-day system monitoring.',
        techStack: [
            'Python',
            'Rich',
            'psutil',
            'CLI',
        ],
        thumbnail: '/projects/thumbnail/srmonitor.png',
    },
];

export const MY_EDUCATION = [
    {
        title: '10th CBSE',
        company: 'Keshav International School, Jhabua',
        duration: '2020-2021',
        description:
            'Achieved 90.6% in secondary education, demonstrating academic excellence and cultivating an early passion for technology and computational thinking.',
    },
    {
        title: '12th CBSE',
        company: 'Indore International School, Indore',
        duration: '2022-2023',
        description:
            'Completed senior secondary education with Physics, Chemistry, and Mathematics - achieving 81.2% and building a strong foundation in analytical and problem-solving skills.',
    },
    {
        title: 'B.Tech in Computer Science Engineering',
        company: 'Vellore Institute of Technology, Chennai',
        duration: '2023-2027',
        description:
            'CGPA of 8.68/10.0. Developed a strong foundation in software development, algorithms, systems, and emerging technologies while actively contributing to technical communities and collaborative projects.',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software/IT Intern',
        company: 'BAI × The Meera',
        duration: '2026',
        description:
            'Developed a hospitality platform using Next.js and Tailwind CSS with a strong focus on responsive design, user experience, and modern web development practices.',
        
    },
    {
        title: 'Java Developer Intern',
        company: 'Navodita Infotech',
        duration: '2025',
        description:
            'Built a quiz management system using Java Spring Boot, HTML/CSS, and SQL, including notes and feedback modules to support a complete user workflow.',
        
    },
    {
        title: 'Vice-Chairperson',
        company: 'Android Club, VIT Chennai',
        duration: '2025-2026',
        description:
            'Led a 120+ member technical community by organizing workshops and events on Android Development, UI/UX, and Web Development while fostering collaboration and growth.',
        
    },
];

export const MY_CERTIFICATIONS = [
    {
        title: 'Oracle AI Database SQL Certified Associate',
        company: 'Oracle',
        duration: '2025',
        description:
            'Built foundational knowledge in database fundamentals, SQL querying, and Oracle AI database concepts.',
        thumbnail: '/certificates/oracle.jpg',
    },
    {
        title: 'IBM Cybersecurity Analyst Certification',
        company: 'IBM',
        duration: '2025',
        description:
            'Strengthened understanding of cybersecurity fundamentals, network security, and incident response.',
        thumbnail: '/certificates/ibm.jpg',
    },
    {
        title: 'AWS Certified Cloud Practitioner',
        company: 'Amazon Web Services',
        duration: '2025',
        description:
            'Developed a strong grasp of AWS cloud fundamentals, core services, and the AWS Well-Architected Framework.',
        thumbnail: '/certificates/aws.jpg',
    },
    {
        title: 'NPTEL Certifications',
        company: 'IIT',
        duration: '2024-2025',
        description:
            'Completed coursework in Wildlife Ecology, Conservation Economics, and Education for Sustainable Development.',
        thumbnail: '/certificates/nptel.jpeg',
    },
];
