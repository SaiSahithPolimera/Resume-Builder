import { v4 as uuidv4 } from "uuid";

function ListItem({ responsibility }) {
  return <li>{responsibility}</li>;
}

function Resume({ GeneralInfo, EducationInfo, PracticalExperienceInfo }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const convertDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return `${year}-${month}-${day}`;
  };

  return (
    <section className="w-full h-full bg-white p-4 flex flex-col gap-3 ">
      <div className="flex items-center text-center w-full justify-center font-semibold">
        <span>
          {GeneralInfo.firstName} {GeneralInfo.lastName}
        </span>
      </div>
      <div className="flex items-center gap-5 hover:cursor-pointer justify-center">
        <span>
          <a
            className="underline"
            href={"mailto:" + GeneralInfo.email}
            target="_blank"
          >
            {GeneralInfo.email}
          </a>{" "}
          | {GeneralInfo.phoneNumber}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-light min-[320px]: text-sm lg:text-lg">Education</span>
        <div className="flex flex-col">
          <span className="font-semibold flex justify-between ">
            <span className="min-[320px]: text-xs lg:text-sm">{EducationInfo.collegeName}</span>
            <span className="min-[320px]: text-xs lg:text-sm">
              {months[
                new Date(convertDate(EducationInfo.yearOfJoining)).getMonth()
              ] +
                " " +
                new Date(
                  convertDate(EducationInfo.yearOfJoining)
                ).getFullYear() +
                " "}
              -
              {" " +
                months[
                  new Date(
                    convertDate(EducationInfo.yearOfRelieving)
                  ).getMonth()
                ] +
                " " +
                new Date(
                  convertDate(EducationInfo.yearOfRelieving)
                ).getFullYear()}
            </span>
          </span>
          <span className="text-sm lg:text-base">{EducationInfo.course}</span>
        </div>
      </div>
      <div>
        <span className="text-lg font-light min-[320px]: text-sm lg:text-lg">Work Experience</span>
        <div className="flex justify-between">
          <div className="flex gap-1 min-[320px]: text-xs min-[320px]:gap-1 items-center lg:text-lg">
            <span className="font-bold min-[320px]: text-xs lg:text-base">
              {PracticalExperienceInfo.companyName}
            </span>
            <span>|</span>
            <span className="font-normal min-[320px]: text-xs lg:text-base">
              {PracticalExperienceInfo.position}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-normal min-[320px]: text-xs lg:text-base">
              {PracticalExperienceInfo.fromDate}
            </span>
            <span>|</span>
            <span className="font-normal min-[320px]: text-xs lg:text-base">
              {PracticalExperienceInfo.toDate}
            </span>
          </div>
        </div>
        <div className="px-6">
          <ul className="list-disc min-[320px]: text-xs lg:text-base">
            {PracticalExperienceInfo.jobResponsibilities.map(
              (responsibility) => (
                <ListItem key={uuidv4()} responsibility={responsibility} />
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Resume;
