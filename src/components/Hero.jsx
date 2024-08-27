import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import Resume from "./Resume";
import { useState } from "react";

function Hero() {

  const [GeneralInfo, setGeneralInfo] = useState({
    firstName: "Sai Sahith",
    lastName: "Polimera",
    email: "sai@gmail.com",
    phoneNumber: "9239949113",
  });

  const [EducationInfo, setEducationInfo] = useState({
    collegeName: "Anil Neerukonda Institue Of Technology",
    course: "Computer Science Engineering with AI & ML",
    yearOfJoining: "22-09-2023",
    yearOfRelieving: "16-05-2026",
  });

  const [PracticalExperienceInfo, setPracticalExperienceInfo] = useState({
    companyName: "Amazon",
    position: "Associate Software Engineer",
    jobResponsibilities: [
      `Designed and implemented a dashboard using React and TypeScript to visualize data stored in DynamoDB`,
      `Decreasing time to understand delivery driver work sessions by over 10 times.`,
      `Ensured only authorized employees have access to the application by creating an AWS Lambda@Edge function to intercept and sign valid requests`,
      `Devised and deployed the infrastructure in TypeScript through AWS CDK, then created efficient algorithms to process data from a custom REST API, so it could scale to handle millions of deliveries`,
      `Setup a CI/CD pipeline and exceeded requirements in each stage, which lead to the application being pushed to production`,
    ],
    fromDate: "April - 2025",
    toDate: "June - 2025",
  });
  return (
    <div className="lg:grid lg:grid-cols-custom p-2 lg:w-full bg-indigo-200 sm:grid-cols-1 md:grid-cols-1 min-[320px]:grid-cols-1 min-[320px]: text-sm lg:text-lg">
      <div className="flex flex-col gap-8 items-start px-5 py-3 w-full bg-indigo-500 rounded-lg text-white">
        <GeneralInformation
          GeneralInfo={GeneralInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <hr className="bg-slate-600 w-full p-0" />
        <EducationalExperience
          EducationInfo={EducationInfo}
          setEducationInfo={setEducationInfo}
        />
        <hr className="bg-slate-600 w-full p-0" />
        <PracticalExperience
          PracticalExperienceInfo={PracticalExperienceInfo}
          setPracticalExperienceInfo={setPracticalExperienceInfo}
        />
      </div>
      <div className="col-span-1 px-5 py-5">
        <h2 className="font-semibold text-lg">Your Resume:</h2>
        <div>
          <Resume
            GeneralInfo={GeneralInfo}
            EducationInfo={EducationInfo}
            PracticalExperienceInfo={PracticalExperienceInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
