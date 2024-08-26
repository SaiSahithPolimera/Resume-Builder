import { useState } from "react";

function Input({
  placeholder,
  value,
  keyValue,
  GeneralInfo,
  setGeneralInfo,
  type,
}) {
  const [val, setValue] = useState(value);
  const handleChange = (e) => {
    setValue(e.target.value);
    const updatedInfo = { ...GeneralInfo, [keyValue]: e.target.value };
    setGeneralInfo(updatedInfo);
  };
  return (
    <input
      type={type}
      className=" px-4 py-2 w-full border-2 border-indigo-500 rounded-lg text-lg text-default focus:outline-none focus:border-3 focus:shadow-xl focus:shadow-indigo-800 focus:border-indigo-800 "
      placeholder={placeholder}
      value={val}
      onChange={(e) => handleChange(e)}
    />
  );
}

function GeneralInformation({ GeneralInfo, setGeneralInfo }) {
  const inputFields = [
    {
      name: "First name",
      value: GeneralInfo.firstName,
      key: "firstName",
      type: "text",
    },
    {
      name: "Last name",
      value: GeneralInfo.lastName,
      key: "lastName",
      type: "text",
    },
    { name: "Email", value: GeneralInfo.email, key: "email", type: "email" },
    {
      name: "Phone Number",
      value: GeneralInfo.phoneNumber,
      key: "phoneNumber",
      type: "email",
    },
  ];

  return (
    <section className="flex flex-col gap-2 w-full">
      <h2 className="font-sans font-semibold py-2 text-lg">
        General Information
      </h2>
      <div className="flex flex-col items-start gap-4">
        {inputFields.map((field) => {
          return (
            <Input
              key={field.key}
              keyValue={field.key}
              placeholder={field.name}
              value={field.value}
              GeneralInfo={GeneralInfo}
              type={field.type}
              setGeneralInfo={setGeneralInfo}
            />
          );
        })}
      </div>
    </section>
  );
}

export default GeneralInformation;
