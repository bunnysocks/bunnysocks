

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "October 2025",
    endDate: "Present",
    companyName: "Fiverr",
    jobTitle: "Freelance Developer",
    description: [
      "Delivered custom web and software solutions for global clients, focusing on clean code, performance, and client satisfaction.",
    ],
  },
  {
    startDate: "August 2023",
    endDate: "September 2025",
    companyName: "ACM SC Amrita",
    jobTitle: "Senior Dev Lead",
    description: [
      "Led development teams, mentored members, and oversaw end-to-end execution of technical projects and events.",
    ],
  },
  {
    startDate: "December 2022",
    endDate: "August 2023",
    companyName: "ACM SC Amrita",
    jobTitle: "Student Member | Mentor",
    description: [
      "Contributed to collaborative development projects and participated in technical initiatives and workshops.",
    ],
  },
];


export const Experience = () => {
    return (
        <div className="flex flex-col gap-4 pt-3">
            <h1 className="text-2xl font-bold ">Experience</h1>
            <div className="pt-1">
              <Timeline>
                {
                workExperienceData.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelinePoint />
                  <TimelineContent>
                    <TimelineTime>{item.startDate} - {item.endDate}</TimelineTime>
                    <TimelineTitle>{item.jobTitle}</TimelineTitle> 
                    <div className="text-base">{item.companyName}</div>
                    <TimelineBody className="text-base text-gray-600">{item.description}</TimelineBody>
                  </TimelineContent>
                </TimelineItem>
                ))
                }
              </Timeline>
            </div>
        </div>
    )
}