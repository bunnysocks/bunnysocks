

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

interface educationItem {
  startDate: string;
  endDate?: string;
  orgName: string;
  companyLogo?: string;
  title: string;
  location: string[];
  companyLink?: string;
}

const educationData: educationItem[] = [
  {
    startDate: "October 2022",
    endDate: "August 2026",
    orgName: "Amrita Vishwa Vidyapeetham",
    title: "BTech. in Electronics and Computer Engineering",
    location: [
      "Amritapuri, Kollam, Kerala",
    ],
  },
  {
    startDate: "2021",
    endDate: "2022",
    orgName: "Narayana Junior College",
    title: "Intermediate Education | MPC",
    location: [
      "Nellore, AP",
    ],
  }
];


export const Education = () => {
    return (
        <div className="flex flex-col gap-4 pt-3">
            <h1 className="text-2xl font-bold ">Education</h1>
            <div className="pt-1">
              <Timeline>
                {
                educationData.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelinePoint />
                  <TimelineContent>
                    <TimelineTime>{item.startDate} - {item.endDate}</TimelineTime>
                    <TimelineTitle>{item.title}</TimelineTitle> 
                    <div className="text-base">{item.orgName}</div>
                    <TimelineBody className="text-base text-gray-600">{item.location}</TimelineBody>
                  </TimelineContent>
                </TimelineItem>
                ))
                }
              </Timeline>
            </div>
        </div>
    )
}