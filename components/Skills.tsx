import React from "react";

const skillsData = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Mongodb",
  "Rust",
  "Swift UI",
  "Golang",
  "FOSS enthusiast",
  "can do physics problem",
  "like cycling",
  "chess player",
];

function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;