export interface ResearchEntry {
  title: string;
  conference: string;
  link: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  date: string;
  grade: string;
}

export interface ExperienceEntry {
  company: string;
  ticker: string;
  title: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface SkillItem {
  name: string;
  proficiency: number;
}

export interface SkillEntry {
  category: string;
  skills: SkillItem[];
}

export interface ContactEntry {
  label: string;
  value: string;
}

export interface AchievementEntry {
  title: string;
  organization: string;
  date: string;
}

export const experienceData: ExperienceEntry[] = [
  {
    company: "J.P. Morgan Chase & Co.",
    ticker: "JPMC US Equity",
    title: "Quantitative Modeling, Credit Risk & Margining",
    location: "Bengaluru, IN",
    date: "Aug ’22 – Present",
    bullets: [
      "Spearheaded the Backtesting framework for Internal Model Method (IMM) and non-standard risk profiles; automated reporting pipelines, reducing the end-to-end process lifecycle by 35%.",
      "Validated and extended model scopes within the Credit Portfolio Group (CPG), performing rigorous independent testing for FX, Commodity Pricing, and large-scale simulation models.",
      "Engineered a revised Model RAG rating and Ongoing Performance Monitoring (OPM) framework, enhancing risk transparency and adherence to model governance standards. Partnered with Quantitative Strats and Software Engineering to deploy automated data portals, streamlining model performance testing and the annual review cycle."
    ]
  },
  {
    company: "J.P. Morgan Chase & Co.",
    ticker: "JPMC US Equity",
    title: "Quantitative Strats, Credit Portfolio",
    location: "Mumbai, IN",
    date: "Jan ’22 – Jul ’22",
    bullets: [
      "Developed an automated Review Table generator for Quarterly FnO deals, achieving an 80% reduction in manual processing time. Conducted technical model reviews for Equity Forwards, Futures, and Synthetic Asset Pricing models; performed implementation testing for Commodity Swap Vanilla Pricers.",
      "Resolved a critical bug in MtM comparison scripts by identifying discrepancies in Variance Swap Curve data, explaining a~40% variance in mis-priced deals."
    ]
  },
  {
    company: "The Innovation Story",
    ticker: "TIS IN Equity",
    title: "Application Programming",
    location: "Mumbai, IN",
    date: "Oct ’21 - May ’22",
    bullets: [
      "Created custom Java Modules to program robots for FIRST Robotics Challenge & FIRST Tech Challenge. Applied vision processing, autonomous Robot Path Planning & Object Detection using TensorFlow & PathWeaver.",
      "Mentored 7 student teams of Dhirubhai Ambani International School and several NGOs across Mumbai for FIRST Robotics Challenge & FIRST Tech Challenge."
    ]
  },
  {
    company: "Tero",
    ticker: "TERO SP Equity",
    title: "Junior Web Developer",
    location: "Madrid, SP",
    date: "Jul '21 - Aug '21",
    bullets: [
      "Developed innate MongoDB Analytics Mechanism, thereby reducing project dependencies and cutting operations cost by 24%.",
      "Updated Tree Saving Mechanism Component on the website."
    ]
  },
  {
    company: "Abstrct, SPTBI",
    ticker: "ABST IN Equity",
    title: "Frontend Web Developer",
    location: "Mumbai, IN",
    date: "Dec '20 - Feb '21",
    bullets: [
      "Developed responsive components on the E-commerce website, improving the page-load speed.",
      "Created Barcode, QR code & wish-list on the website."
    ]
  },
  {
    company: "RUR Greenlife Pvt. Ltd.",
    ticker: "RUR IN Equity",
    title: "Technical Support Intern",
    location: "Mumbai, IN",
    date: "Jul '19 - Feb '20",
    bullets: [
      "Established a network to transfer feedback data for project to respective team assignees in Excel.",
      "Created a backend which ensures robust storage.",
      "Created a VBA layout for easing data entry tasks."
    ]
  }
];

export const skillsData: SkillEntry[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Python ", proficiency: 95 },
      { name: "Pandas ", proficiency: 92 },
      { name: "Polars ", proficiency: 85 },
      { name: "NumPy ", proficiency: 90 },
      { name: "C++ ", proficiency: 82 },
      { name: "C ", proficiency: 75 },
      { name: "Bash ", proficiency: 80 },
      { name: "React ", proficiency: 85 },
      { name: "TypeScript ", proficiency: 88 }
    ]
  },
  {
    category: "Data, Tools & Dev",
    skills: [
      { name: "MySQL ", proficiency: 85 },
      { name: "DuckDB ", proficiency: 80 },
      { name: "TensorFlow ", proficiency: 78 },
      { name: "Git ", proficiency: 92 },
      { name: "Linux/Unix ", proficiency: 88 },
      { name: "LaTeX ", proficiency: 85 },
      { name: "Streamlit ", proficiency: 82 }
    ]
  }
];

export const contactsData: ContactEntry[] = [
  { label: "Mail", value: "dy733376@gmail.com" },
  { label: "Mobile", value: "+91-8452-9999-70" },
  { label: "Linkedin", value: "https://www.linkedin.com/in/deepakyadav27" },
  { label: "Github", value: "https://github.com/vieee" }
];

export const achievementsData: AchievementEntry[] = [
  {
    title: "Secured Employee Excellence Award for streaming Backtesting & Model Reporting in CPG",
    organization: "J.P. Morgan Chase & Co.",
    date: "Q2 2024"
  },
  {
    title: "Secured 2nd Place in the Code for Good Hackathon",
    organization: "J.P. Morgan Chase & Co.",
    date: "Jul 2022"
  },
  {
    title: "Secured 4th Place in the Specathon Hackathon",
    organization: "St. Peter's College, Hyderabad",
    date: "Oct 2021"
  }
];

export const researchData: ResearchEntry[] = [
  {
    title: "In-Browser Attendance System using Face Recognition",
    conference: "12th ICCCNT",
    link: "https://ieeexplore.ieee.org/document/9580042"
  },
  {
    title: "Server-less Edge Computing; Real-time Face, Fingerprint & Speech Recognition. Intelligent Framework for Crime Prediction",
    conference: "4th ESCI",
    link: "https://ieeexplore.ieee.org/document/9758281"
  }
];

export const educationData: EducationEntry[] = [
  {
    degree: "Bachelor of Technology, Information Technology",
    institution: "Sardar Patel Institute of Technology, Mumbai",
    date: "2018 - 2022",
    grade: "9.52/10"
  },
  {
    degree: "High School",
    institution: "Pace Junior Science College, Andheri",
    date: "2016 - 2018",
    grade: "92.62%"
  },
  {
    degree: "Senior Secondary",
    institution: "Fatima High School, Mumbai",
    date: "2004 - 2016",
    grade: "95.20%"
  }
];

export const portfolioData = {
  experience: experienceData,
  skills: skillsData,
  contacts: contactsData,
  achievements: achievementsData,
  research: researchData,
  education: educationData,
};
