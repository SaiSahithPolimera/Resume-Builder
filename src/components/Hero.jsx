import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import Resume from "./Resume";

function Hero() {
  return (
    <div className="grid grid-cols-custom p-2 w-full bg-indigo-200">
      <div className="flex flex-col gap-8 items-start px-5 py-3 w-full bg-indigo-500 rounded-lg text-white">
        <GeneralInformation />
        <hr className="bg-slate-600 w-full p-0"/>
        <EducationalExperience />
        <hr className="bg-slate-600 w-full p-0"/>
        <PracticalExperience />
      </div>
      <div className="col-span-1 px-5 py-5">
        <h2 className="font-semibold text-lg">Your Resume:</h2>
        <div>
          <Resume/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
