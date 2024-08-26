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
  return (
    <div className="grid grid-cols-custom p-2 w-full bg-indigo-200">
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
        <PracticalExperience />
      </div>
      <div className="col-span-1 px-5 py-5">
        <h2 className="font-semibold text-lg">Your Resume:</h2>
        <div>
          <Resume GeneralInfo={GeneralInfo} EducationInfo={EducationInfo} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
