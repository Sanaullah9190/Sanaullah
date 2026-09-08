export const personalInfo = {
  name: "Md Sanaullah",
  logoText: "Sanaullah",
  role: "Full Stack MERN & React Native Developer",
  tagline: "Building products for the browser and the pocket.",
  description:
    "Full-stack developer focused on the MERN stack and React Native. I turn complex ideas into clean, functional web and mobile apps — handling everything from database schemas to the final pixel on screen",
  email: "sanaullaht9190@gmail.com.com",
  phone: "+91-8356078504",
  location: "Ranchi, India",
  resumeLink: "/ResumeFi.pdf", // apna resume PDF link daalo
  profileImage: "/profile.png",// apni professional photo 'public' folder mein daal ke path yahan set karo
};

// Hero section mein typing animation ke liye rotating roles
export const roles = [
  "Full Stack Developer",
  "MERN & React Native Dev",
  "Frontend & Mobile Specialist",
  "API Architect",
];

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#stack" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export const aboutText = [
  "I’m a Civil Engineering undergrad who fell in love with code. While managing my core degree, I spent my nights and weekends teaching myself full-stack development—not just to learn syntax, but to build real, usable software. Balancing rigorous engineering coursework with self-taught coding showed me what I’m truly capable of when I’m passionate about something.Today, I build web and mobile apps using the MERN stack and React Native. I genuinely enjoy the whole process—from mapping out backend REST APIs and handling database schemes to styling clean frontends and getting apps live. For me, taking a feature from a quick sketch to a smooth, working product isn't just work; it's what keeps me hooked.",
];

export const highlights = [
  "Strong adaptability & proven self-learning mindset",
  "REST & API architecture with Node.js & Express",
  "Clean, modular React & React Native components",
  "Database modeling & schema design in MongoDB",
  "End-to-end feature ownership from concept to deployment",
];

export const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "2", label: "Platforms — web & mobile" },
  { value: "90%", label: "Ready for full-time roles" },
];

// Tech stack grid — 'icon' ek emoji hai, chaho to react-icons se replace kar sakte ho
// export const techStack = [
//   { name: "JavaScript", icon: "🔷" },
//   { name: "React", icon: "⚛" },
//   { name: "React Native", icon: "▲" },
//   { name: "Node.js", icon: "🟢" },
//   { name: "Express", icon: "⚙" },
//   { name: "MongoDB", icon: "🍃" },
//   { name: "Tailwind CSS", icon: "🎨" },
//   { name: "REST APIs", icon: "🔗" },
//   { name: "Git / GitHub", icon: "🐙" },
//   { name: "Firebase", icon: "☁" },
//   { name: "Postman", icon: "🧪" },
//   { name: "Vercel", icon: "🚀" },
// ];

export const techStackCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: "🌐",
    items: ["JavaScript (ES6+)", "React.js", "Next.Js", "React Native", "Tailwind CSS", "HTML5 / CSS3", "redux Tolkit"],
  },
  {
    id: 2,
    title: "Backend",
    icon: "⚙️",
    items: ["Go-Lang", "Node.js", "Express.js", "RESTfull APIs", "JWT Authentication", "Multer"],
  },
  {
    id: 3,
    title: "Database",
    icon: "🗄️",
    items: ["MongoDB", "Mongoose ODM"],
  },
  {
    id: 4,
    title: "Tools & Others",
    icon: "🛠️",
    items: ["Vs Code", "Git / GitHub", "Postman", "Firebase", "Render / Vercel", "Cloudinary", "AI Tools"],
  },
];

// Projects — type: "web" ya "mobile" (isi se filter kaam karta hai)
export const projects = [
  {
    id: 1,
    type: "web",
    tagLabel: "Web App",
    title: "University Resource Portal",
    description:
      "full-stack academic platform engineered to streamline university study material distribution. Features a multi-tiered hierarchy (Course ➔ Branch ➔ Year ➔ Subject) for seamless document discovery, alongside an automated Cloudinary pipeline for PDF storage. Includes a secure Admin Console with OTP/JWT-based authentication for dynamic content management and full CRUD operations.",
    features: [
      "Role-based access (Student portal & Admin dashboard)",
      "Hierarchical resource sorting by branch, semester & subject",
      "Instant search & dynamic filtering by subject code",
      "Cloud storage & fast document previews via Cloudinary",
      "RESTful CRUD API with structured MongoDB schemas",
      "Responsive mobile-first UI with React & Tailwind CSS"
    ],
    tech: ["React.Js", "Node.js", "MongoDB", "Express", "Cloudinary Api", "JWT & OTP Admin"],
    liveLink: "https://course-app-frontend-7evw.onrender.com/",
    githubLink: "https://github.com/Sanaullah9190/Course_App",
    linkLabel: "Live Demo",
  },
  {
    id: 2,
    type: "mobile",
    tagLabel: "Mobile App",
    title: "BookWorm — Share Your Favorite Reads",
    description:
      "A social reading app where book lovers can discover, rate, and share their favorite books with a community of readers. Combines authentication, content creation, and a social feed into one cohesive mobile experience.",
    features: [
      "JWT-based user authentication & secure profiles",
      "Interactive social feed with community book shares",
      "Rating & review system for discovered books",
      "Full CRUD book collection & reading list management",
      "Express & MongoDB backend for real-time feed fetching",
      "Cross-platform mobile UI built with React Native",
    ],
    tech: ["React Native", "JWT", "Rect Navigation", "MongoDB", "Node.Js", "Express", "Multer"],
    liveLink: "",
    githubLink: "https://github.com/Sanaullah9190/react-native-bookWarmApp",
    linkLabel: "",
  },
  {
    id: 3,
    type: "web",
    tagLabel: "Web App",
    title: "YouTube Backend Clone",
    description:
      "A production-ready REST API featuring secure JWT user authentication (signup/login) and protected routes. Handles complete video streaming logic—including comments, playlists, likes, and subscriber tracking—supported by a Multer and Cloudinary pipeline for automated video uploads and optimized MongoDB database queries.",
    features: [
      "Secure JWT authentication with protected routes",
      "Complete video streaming & playback management",
      "Interactive engagement (Likes, comments, & subscriptions)",
      "Custom playlist creation & video collection management",
      "Automated video & thumbnail uploads via Multer & Cloudinary",
      "Optimized MongoDB aggregations for fast API responses",
    ],
    tech: ["JWT", "Multer", "Node.js", "MongoDB", "Cloudinary", "REST APIs"],
    liveLink: "",
    githubLink: "https://github.com/Sanaullah9190/Youtube_Backend_Clone",
    linkLabel: "",
  },
  {
    id: 4,
    type: "mobile",
    tagLabel: "Mobile App",
    title: "Tic Tac Toe",
    description:
      "A clean, minimal two-player Tic Tac Toe game built for mobile, focused on smooth interactions and an intuitive, distraction-free UI. Designed to demonstrate solid front-end logic, state handling, and UI polish in a small, self-contained app.",
    features: [
      "Two-player local gameplay with turn-based logic",
      "Real-time game state & winner detection algorithms",
      "Score tracking & instant match reset functionality",
      "Smooth animations & responsive touch feedback",
      "Distraction-free, minimal UI designed for mobile",
      "Clean component state management & performance logic",
    ],
    tech: ["React Native", "Node.js", "JavaScript(ES6+)", "React Hooks"],
    liveLink: "",
    githubLink: "https://github.com/Sanaullah9190/Tik-tak-toe",
    linkLabel: "",
  },
];

export const projectFilters = [
  { label: "all", value: "all" },
  { label: "web", value: "web" },
  { label: "mobile", value: "mobile" },
];

// ---- Screen-recording / demo videos section ----
// type: "web" -> laptop-frame style, "mobile" -> phone/reel-style vertical
// videoSrc: apni video 'public/videos/' folder mein daalo aur path yahan set karo
export const demoVideos = [
  {
    id: 1,
    type: "mobile",
    title: "BookWorm App",
    videoSrc: "/vedios/BookWorm.mp4",
    poster: "/Poster/posterBookworm.png",
  },
  {
    id: 2,
    type: "mobile",
    title: "Tic Tac Toe",
    videoSrc: "/vedios/tikTak.mp4",
    poster: "/Poster/TicTacToe_Poster.png",
  },
  {
    id: 3,
    type: "web",
    title: "University Resource Portal",
    videoSrc: "/vedios/Campus_App.mp4",
    poster: "/Poster/CampusPoster.png",
  },
  
];

// Sirf do options — "all" nahi, aur default "mobile" rahega (component mein set hai)
export const demoFilters = [
  { label: "mobile", value: "mobile" },
  { label: "web", value: "web" },
];

// export const experience = [
//   {
//     id: 1,
//     date: "2025 — Present",
//     title: "Full Stack Developer Intern, XYZ Tech",
//     link:"https://google.com",
//     description:
//       "Built and shipped 3 customer-facing features on a MERN production app; reduced page load time by 30% through code-splitting and query optimization.",

//   },
//   {
//     id: 2,
//     date: "2024 — 2025",
//     title: "Freelance MERN & React Native Developer",
//     link:"https://deluxesalon.in/",
//     description:
//       "Delivered 4 client projects end-to-end, from requirements to deployment, across web and mobile platforms.",
//   },
//   {
//     id: 3,
//     date: "2024",
//     title: "B.Tech, Computer Science",
//     link:"https://www.facebook.com/",
//     description:
//       "Focused coursework in data structures, DBMS, and web technologies; built multiple self-directed full stack projects.",
//   },
// ];

// new expreance card box code 
export const experience = [
  {
    id: 1,
    logo: "/IIT_Logo.png",
    title: "Web Development Bootcamp",
    organization: "IIT Kanpur",
    date: "JAN 2025",
    liveLink: "https://ebootathon.com/labs/beta/chemical/Element%20Detection%20And%20identification%20of%20Functional%20Group%20in%20Organic%20Compound/simulation.html",
    bullets: [
      "Creating a Virtual LAB",
      "Creating Simulation for perform Paractical",
      "Gained hands-on experience",
    ],
  },

];

export const contactDetails = [
  {
    id: 1,
    type: "email",
    label: "Email",
    value: personalInfo.email,
    note: "Send me an email anytime",
  },
  {
    id: 2,
    type: "phone",
    label: "Phone",
    value: personalInfo.phone,
    note: "Available for calls",
  },
  {
    id: 3,
    type: "location",
    label: "Location",
    value: personalInfo.location,
    note: "Open to remote & relocation",
  },
];

const message = "Hi Md Sanaullah Ansari, I came across your portfolio and I'm impressed with your work. I'd like to discuss an opportunity — let's connect!"
export const WhatsApp = {
  link: `https://wa.me/918356078504?text=${encodeURIComponent(message)}`,

}
export const socialLinks = [
  { type: "github", label: "GitHub", href: "https://github.com/Sanaullah9190" },
  { type: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/md-sanaullah-khan-1a0871281/" },
  { type: "whatsaap", label: "WhatsAap", href: `https://wa.me/918356078504?text=${encodeURIComponent(message)}`} ,
  { type: "email", label: "Email", href: `mailto:${personalInfo.email}` },
];

export const footerText = `© ${new Date().getFullYear()} ${personalInfo.name} — built with React & a lot of 💖.`;
