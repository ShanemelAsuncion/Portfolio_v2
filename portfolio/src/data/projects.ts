import type { Project } from '../types/interfaces';

export const projects: Project[] = [
  {
    id: 1,
    title: "Custom Website Builder Platform",
    tagline: "Empowering small businesses with self-managed websites",
    description: "Developed a scalable website builder platform that allows clients like Jay’s Blade & Snow Services to design, edit, and manage their own websites with ease.",
    fullDescription: "This project centers on the creation of a custom website builder tailored for small business owners who need professional online presence without relying on third-party templates or ongoing developer maintenance. Designed and engineered from the ground up, the platform enables users to update their content, modify layouts, and customize design elements in real time. Built with performance and scalability in mind, it supports modular front-end components, secure authentication, and optimized deployment pipelines. One of the first clients to use this system was Jay’s Blade & Snow Services — a local business that now manages its entire site through the platform. Their site demonstrates the platform’s flexibility and reliability, blending intuitive user controls with modern web performance. This project highlights the seamless integration of software development and user empowerment, combining technical architecture with real-world business needs.",
    image: "/1.png",
    images: ["/1.png", "/2.png", "/5.png", "/3.png", "/4.png"],
    tech: ["React", "Vite", "TailwindCSS", "Framer Motion", "Radix UI", "Node.js", "Express", "Supabase", "JWT", "bcrypt"],
    color: "from-green-400 to-emerald-600",
    metrics: { "Redeploy needed": "0", "Uploads": "100+", "Rating": "4.3" },
    featured: true,
    liveUrl: "https://jaysbladeandsnowservicesinc.netlify.app",
    githubUrl: "https://github.com/ShanemelAsuncion/Website_builder",
    timeline: "2025",
    teamSize: "1",
    role: "Full-stack Developer",
    features: [
      "Admin dashboard for content management",
      "Zero-redeploy runtime config",
      "Uploads to cloud storage",
      "Resilient frontend with Axios retry"
    ],
    challenges: [
      "Implementing runtime configuration without redeploy",
      "Secure handling of uploads and authentication"
    ],
    outcomes: [
      "Fully functional no-code website builder",
      "Dynamic content editing for real-world business"
    ]
  },
  {
    id: 2,
    title: "AI Chatbot",
    tagline: "Chatbot with traditional and RAG-enhanced capabilities",
    description: "Streamlit-based conversational AI chatbot that integrates real-time GPT dialogue with Retrieval-Augmented Generation (RAG) for intelligent, document-informed responses.",
    fullDescription:
      "The AI Chatbot project merges conversational intelligence with factual reliability by combining traditional GPT-based dialogue with Retrieval-Augmented Generation (RAG). Built using Streamlit, this application allows users to chat in real time, upload multiple documents (PDFs or text files), and receive accurate, context-aware answers. Once documents are uploaded, text is extracted through PyPDF, processed into embeddings using the OpenAI API, and stored in a Pinecone vector database. When users send a message, LangChain orchestrates retrieval from Pinecone, grounding the model’s response in relevant document excerpts.\n\n" +
      "The system maintains conversation history, enabling continuous and coherent dialogue. Each response is transparently linked to the source material, ensuring users know exactly which parts of their uploaded content informed the answer. The backend architecture includes modular caching layers and optimized vector retrieval pipelines to maintain low latency and scalability for high-volume use cases.\n\n" +
      "This project showcases advanced integration between LLMs and vector databases, demonstrating mastery of prompt engineering, data processing, and real-time conversational design. The outcome is an AI chatbot capable of answering complex, document-grounded questions with high accuracy — bridging the gap between generative fluency and factual precision.",
    image: "/13.png",
    images: ["/11.png", "/12.png", "/13.png"],
    tech: ["Python", "Streamlit", "OpenAI API", "Pinecone", "LangChain", "PyPDF"],
    color: "from-cyan-400 to-cyan-600",
    metrics: { "Documents processed": "100+", "Accuracy": "85%", "Rating": "4.1" },
    featured: true,
    liveUrl: "https://ai-chatbot-bfgsesbwyzsoxgvshjayrs.streamlit.app/",
    githubUrl: "https://github.com/ShanemelAsuncion/ai-chatbot",
    timeline: "2025",
    teamSize: "1",
    role: "Full-stack Developer",
    features: [
      "Real-time GPT chat with customizable prompts",
      "RAG-enhanced chat with PDF upload and processing",
      "Context-aware responses with source tracking",
      "Supports multiple document uploads"
    ],
    challenges: [
      "Integrating RAG workflow with real-time chat",
      "Ensuring efficient vector search and retrieval",
      "Handling multiple PDF documents securely"
    ],
    outcomes: [
      "Delivered a fully functional RAG chatbot",
      "Enabled document-informed, context-aware responses",
      "Demonstrated proficiency in OpenAI and Pinecone integrations"
    ]
  },
  {
    id: 3,
    title: "uniONE Mobile App",
    tagline: "Student networking app connecting like-minded peers",
    description: "Developed an MVP mobile application designed to connect university students based on shared interests, programs, and goals — fostering collaboration and community engagement.",
    fullDescription:
      "uniONE is a mobile MVP built with the vision of helping students connect, collaborate, and build meaningful academic and social relationships. Inspired by modern matching platforms like Tinder, the app introduces a swipe-based interface that matches students with compatible peers based on shared interests, study programs, and extracurricular goals. It aims to bridge the gap between social networking and professional development within the academic environment.\n\n" +
      "Developed using React Native and Expo for seamless cross-platform compatibility, the application integrates with a Django REST API backend powered by PostgreSQL for data persistence and user management. Secure authentication and authorization mechanisms ensure that all connections and interactions remain private and verified. The intuitive UI focuses on simplicity and engagement, offering real-time updates and dynamic profile cards for smooth, interactive browsing.\n\n" +
      "As part of a seven-member development team, I contributed to the front-end architecture, implementing navigation flows, state management, and API integration to synchronize user profiles, matches, and messages. The backend enforces strict validation and permission logic while maintaining fast, reliable performance under concurrent requests.\n\n" +
      "This MVP successfully validated the concept of peer matching in an educational context, combining social discovery with secure technology. The project demonstrates technical proficiency in mobile development, real-time user experience design, and scalable architecture — while capturing the spirit of human connection within digital spaces.",
    image: "/10.png",
    images: ["/6.png", "/7.png", "/8.png", "/9.png", "/10.png"],
    tech: ["React Native", "Expo", "Django", "PostgreSQL"],
    color: "from-orange-400 to-orange-600",
    metrics: { "Development Duration": "3 months", "Test Users": "50+", "Rating": "4.6" },
    featured: false,
    liveUrl: "https://unione.cc/",
    githubUrl: "https://github.com/UAlberta-CMPUT401/unione",
    // videoUrl: "https://www.youtube.com/watch?v=GjZJ43cEKqQ&t=301s",
    timeline: "JAN 2023 - APR 2023",
    teamSize: "7",
    role: "Front-end Developer",
    features: [
      "Swipe-based peer matching system",
      "Secure authentication and user profiles",
      "Cross-platform mobile compatibility",
      "Real-time connection and interaction flow"
    ],
    challenges: [
      "Designing an intuitive matching algorithm",
      "Ensuring secure authentication and privacy",
      "Optimizing smooth animations and transitions"
    ],
    outcomes: [
      "Validated concept of student connection via peer-matching",
      "Delivered a fully functional social MVP prototype",
      "Demonstrated technical scalability for future expansion"
    ]
  }, 
]