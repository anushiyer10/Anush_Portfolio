/**
 * Populated from the provided resume (anush_resume_v2.pdf)
 * Edit here to change displayed content.
 */
const resume = {
  name: "Anush Iyer",
  title: "Data Scientist — GenAI, LLMs & ML",
  email: "anushiyer10@gmail.com",
  phone: "+91-9315742917",
  linkedin: "https://www.linkedin.com/in/anushiyer10/",
  summary: "Data Scientist with hands on experience in building GenAI systems, LLM based agents and Machine Learning solutions.",
  skills: {
    languages: ["Python", "Java", "C", "C++"],
    core: ["Machine Learning", "Deep Learning", "GenAI"],
    libraries: ["Scikit-Learn", "TensorFlow", "OpenCV", "PySpark"],
    tools: ["Azure Databricks", "Azure AI Search", "Streamlit", "Snowflake", "SQL"]
  },
  experience: [
    {
      company: "Lennox India Technology Center",
      title: "Graduate Engineer Trainee (Data Scientist 1)",
      date: "Jul 2025 – Present",
      bullets: [
        "Developed multiple GenAI agents trained on diverse engineering documents such as standards, procedures, and technical manuals.",
        "Built a multi agent system to support engineering workflows.",
        "Automated document extraction and ingestion with a scheduled pipeline.",
        "Tools: Azure Databricks, Azure AI Search, Prompt Engineering, Python, Streamlit"
      ]
    },
    {
      company: "Lennox India Technology Center",
      title: "Data Science Intern",
      date: "Feb 2025 – Jul 2025",
      bullets: [
        "Migrated recommendation engine from Azure ML Workspace to Azure Databricks.",
        "Optimized the engine to handle 25.2 million customer records.",
        "Built Retrieval-Augmented Generation (RAG) chatbots for internal use.",
        "Tools: PySpark, SQL, Streamlit, Azure Databricks, Azure DevOps"
      ]
    },
    {
      company: "Arcadia (Urjanet)",
      title: "Software Engineer Intern",
      date: "May 2024 – Jul 2024",
      bullets: [
        "Built Random Forest model to predict next billing details for customers.",
        "Extracted data for 300,000 customers from Snowflake using optimized SQL.",
        "Tools: Scikit-Learn, SQL, Snowflake"
      ]
    }
  ],
  education: {
    school: "Vellore Institute Of Technology, Chennai",
    degree: "B.Tech in Computer Science and Engineering (AI/ML)",
    years: "2021 - 2025",
    cgpa: "8.62"
  },
  certifications: [
    "AWS Certified Cloud Practitioner",
    "AI Certification (IIT Kharagpur)"
  ],
  projects: [
    {
      title: "Face Emotion Recognition",
      tech: ["CNN", "TensorFlow"],
      description: "CNN model classifying 7 emotions. Trained on 28,821 images; test 7,066 images. Accuracy: 72.3%."
    },
    {
      title: "Traffic Sign Detection",
      tech: ["YOLOv5", "TensorFlow"],
      description: "Object detection for 4 sign types. Dataset: 1244 images. MAP: 0.939."
    }
  ]
};

export default resume;
