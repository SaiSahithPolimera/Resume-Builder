import { useState } from "react";

function Input({ type, keyName, EducationInfo, setEducationInfo, value }) {
  const [val, setValue] = useState(value);
  const handleChange = (e) => {
    setValue(e.target.value);
    const updatedEducationInfo = {
      ...EducationInfo,
      [keyName]: e.target.value,
    };
    setEducationInfo(updatedEducationInfo);
  };
  return (
    <input
      type={type}
      value={val}
      className=" px-4 py-2 w-full border-2 border-indigo-500 rounded-lg text-lg text-default focus:outline-none focus:border-3 focus:shadow-xl focus:shadow-indigo-800 focus:border-indigo-800 "
      onChange={(e) => handleChange(e)}
    />
  );
}

function EducationalExperience({ EducationInfo, setEducationInfo }) {
  const fields = [
    {
      placeHolder: "University / College Name",
      type: "text",
      key: "collegeName",
      value: EducationInfo.collegeName,
    },
    {
      placeHolder: "Course",
      type: "text",
      key: "course",
      value: EducationInfo.course,
    },
    {
      placeHolder: "From ",
      type: "date",
      key: "yearOfJoining",
      value: EducationInfo.yearOfJoining,
    },
    {
      placeHolder: "To",
      type: "date",
      key: "yearOfRelieving",
      value: EducationInfo.yearOfRelieving,
    },
  ];
  return (
    <section className="flex flex-col w-full ">
      <h2 className="font-sans font-semibold py-2 text-lg">
        Educational Experience
      </h2>
      <div className="flex flex-col items-start gap-2">
        {fields.map((field) => {
          return (
            <Input
              type={field.type}
              keyName={field.key}
              key={field.key}
              value={field.value}
              EducationInfo={EducationInfo}
              setEducationInfo={setEducationInfo}
            />
          );
        })}
      </div>
    </section>
  );
}

export default EducationalExperience;
