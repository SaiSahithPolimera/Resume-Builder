/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ placeholder }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      type="text"
      className=" px-4 py-2 w-full border-2 border-indigo-500 rounded-lg text-lg text-default focus:outline-none focus:border-3 focus:shadow-xl focus:shadow-indigo-800 focus:border-indigo-800 "
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
}

function GeneralInformation() {
  const inputFields = [
    { name: "First name" },
    { name: "Last Name" },
    { name: "Email" },
    { name: "Phone Number" },
  ];

  return (
    <section className="flex flex-col gap-2 w-full">
      <h2 className="font-sans font-semibold py-2 text-lg">
        General Information
      </h2>
      <div className="flex flex-col items-start gap-4">
        {inputFields.map((field) => {
          return <Input key={uuidv4()} placeholder={field.name} />;
        })}
      </div>
    </section>
  );
}

export default GeneralInformation;
