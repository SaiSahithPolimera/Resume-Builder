function Resume({ GeneralInfo, EducationInfo }) {
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
    <section className="w-full h-full bg-white p-4">
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
        <span className="font-normal">Education</span>
        <div className="flex flex-col">
          <span className="font-semibold flex justify-between">
            <span>{EducationInfo.collegeName}</span>
            <span>
              {months[
                new Date(convertDate(EducationInfo.yearOfJoining)).getMonth()
              ] +
                " " +
                new Date(
                  convertDate(EducationInfo.yearOfJoining)
                ).getFullYear() + " "} 
              -
              {  " " + months[
                new Date(convertDate(EducationInfo.yearOfRelieving)).getMonth()
              ] +
                " " +
                new Date(
                  convertDate(EducationInfo.yearOfRelieving)
                ).getFullYear()}
            </span>
          </span>
          <span className="text-sm  ">{EducationInfo.course}</span>
        </div>
      </div>
    </section>
  );
}
export default Resume;
