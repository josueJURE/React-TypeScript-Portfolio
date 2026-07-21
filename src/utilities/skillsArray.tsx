interface SkillItem {
  skill: string;
  percentage: string;
  description: string;
}

// Type for the entire array
type SkillsDataType = SkillItem[];


const skillsData: SkillsDataType = [
    {
      skill: "HTML",
      percentage: "95%",
      description: "Mastery in HTML is the cornerstone of my web development journey. With over a year of self-teaching, I've honed my skills in creating clean, well-structured HTML."
    },
    {
      skill: "CSS",
      percentage: "90%",
      description: "My CSS skills extends beyond styling; it's about creating visually appealing and responsive designs."
    },
    {
      skill: "JavaScript",
      percentage: "85%",
      description: "JavaScript is where I thrive in adding interactivity and dynamism to web applications. I've immersed myself in the language to master ES6 concepts."
    },
    {
      skill: "TypeScript",
      percentage: "75%",
      description: "After mastering JavaScript, learning TypeScript felt like the next natural step. I now understand how using types can prevent bugs from propagating."
    },
    {
      skill: "Node.js and Express",
      percentage: "85%",
      description: "The dynamic duo of Node.js and Express has revolutionized my web development workflow. I can now leverage JavaScript's versatility on the server-side."
    },
    {
      skill: "ChatGPT OpenAI API",
      percentage: "75%",
      description: "The ChatGPT OpenAI API is a recent technology that's captured my interest. I've integrated it into two of my projects, and the results have been remarkable."
    },
    {
      skill: "React",
      percentage: "50%",
      description: "I've learned a lot more about React and React hooks through the courses I've completed on Codecademy. I've earned two certificates of completion from this learning platform. In my project section, you will see that three of my projects have been written in React or Next.js."
    },
    {
      skill: "PostgreSQL",
      percentage: "30%",
      description: "A powerful open-source relational database management system that uses SQL to store, query, update, and manage structured data efficiently"
    },


  ];

  export default skillsData