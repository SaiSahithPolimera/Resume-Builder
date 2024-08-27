import { useState } from "react";

function Input({
  placeholder,
  value,
  setPracticalExperienceInfo,
  PracticalExperienceInfo,
  keyName,
}) {
  const [val, setValue] = useState(value);
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(e.target.value);
    const updatedInfo = {
      ...PracticalExperienceInfo,
      [keyName]:
        keyName === "jobResponsibilities" ? newValue.split("*") : newValue,
    };
    setPracticalExperienceInfo(updatedInfo);
    console.log(updatedInfo);
  };

  if (keyName === "jobResponsibilities") {
    return (
      <div className="w-full">
        <p className="text-xs">(Use can use * symbol for bullet points) </p>
        <textarea
          className=" px-4 py-2 text-sm w-full border-2 border-indigo-500 rounded-lg text-lg text-default focus:outline-none focus:border-3 focus:shadow-xl focus:shadow-indigo-800 focus:border-indigo-800"
          value={val}
          onChange={(e) => handleChange(e)}
        />
      </div>
    );
  }
  return (
    <input
      className=" px-4 py-2 w-full border-2 border-indigo-500 rounded-lg text-lg text-default focus:outline-none focus:border-3 focus:shadow-xl focus:shadow-indigo-800 focus:border-indigo-800 "
      placeholder={placeholder}
      value={val}
      onChange={(e) => handleChange(e)}
    />
  );
}

function PracticalExperience({
  PracticalExperienceInfo,
  setPracticalExperienceInfo,
}) {
  const fields = [
    {
      placeHolder: "Company Name",
      type: "text",
      value: PracticalExperienceInfo.companyName,
      keyName: "companyName",
    },
    {
      placeHolder: "Position ",
      type: "text",
      value: PracticalExperienceInfo.position,
      keyName: "position",
    },
    {
      placeHolder: "Job responsibilities",
      type: "text",
      value: PracticalExperienceInfo.jobResponsibilities,
      keyName: "jobResponsibilities",
    },
    {
      placeHolder: "From",
      type: "text",
      value: PracticalExperienceInfo.fromDate,
      keyName: "fromDate",
    },
    {
      placeHolder: "To",
      type: "text",
      value: PracticalExperienceInfo.toDate,
      keyName: "to",
    },
  ];
  return (
    <section className="flex flex-col w-full">
      <h2 className="font-sans font-semibold py-2 text-lg">
        Practical Experience
      </h2>
      <div className="flex flex-col items-start gap-2 w-full">
        {fields.map((field) => {
          return (
            <Input
              key={field.keyName}
              placeholder={field.placeHolder}
              keyName={field.keyName}
              setPracticalExperienceInfo={setPracticalExperienceInfo}
              PracticalExperienceInfo={PracticalExperienceInfo}
              value={field.value}
            />
          );
        })}
      </div>
    </section>
  );
}

export default PracticalExperience;
