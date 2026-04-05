export interface ExperienceEntry {
  company: string;
  ticker: string;
  title: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface SkillEntry {
  category: string;
  skills: string[];
}

export interface ContactEntry {
  label: string;
  value: string;
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
    skills: ["Python", "Pandas", "Polars", "NumPy", "C++", "C", "Bash", "React", "TypeScript"]
  },
  {
    category: "Data, Tools & Dev",
    skills: ["MySQL", "DuckDB", "TensorFlow", "Git", "Linux/Unix", "LATEX", "Streamlit"]
  }
];

export const contactsData: ContactEntry[] = [
  { label: "Mail", value: "dy733376@gmail.com" },
  { label: "Mobile", value: "+91-8452-9999-70" },
  { label: "Linkedin", value: "https://www.linkedin.com/in/deepakyadav27" },
  { label: "Github", value: "https://github.com/vieee" }
];

export const achievementsData: string[] = [
  "Secured the RM&C Employee Excellence Award in Q2 2024 for streaming the Backtesting process and Model performance reporting in the CPG space at JPMorgan Chase & Co.",
  "Secured 2nd Place in the Code for Good Hackathon organized by JPMorgan Chase & Co.",
  "Secured 4th Place in the Specathon Hackathon organized by St. Peter's College, Hyderabad."
];

export const researchData: string[] = [
  "In-Browser Attendance System using Face Recognition, 12th ICCCNT (https://ieeexplore.ieee.org/document/9580042)",
  "Server-less Edge Computing; Real-time Face, Fingerprint & Speech Recognition. Intelligent Framework for Crime Prediction, 4th ESCI (https://ieeexplore.ieee.org/document/9758281)"
];

export const educationData: string[] = [
  "Bachelor of Technology, Information Technology | Sardar Patel Institute of Technology, Mumbai | 2018 - 2022 | Grade: 9.52/10",
  "Pace Junior Science College, Andheri | 2016 - 2018 | Grade: 92.62%",
  "Fatima High School, Mumbai | 2004 - 2016 | Grade: 95.20%%"
];

export const portfolioData = {
  experience: experienceData,
  skills: skillsData,
  contacts: contactsData,
  achievements: achievementsData,
  research: researchData,
  education: educationData,
};
