import { v4 as uuidv4 } from "uuid";

function EducationalExperience() {
  const fields = [
    { placeHolder: "School Name", type: "text" },
    { placeHolder: "From ", type: "date" },
    { placeHolder: "To", type: "date" },
  ];
  return (
    <section className="flex flex-col w-full ">
      <h2 className="font-sans font-semibold py-2 text-lg">
      Educational Experience
      </h2>
      <div className="flex flex-col items-start gap-2">
        {fields.map((field) => {
          return (
            <div key={uuidv4()} className="w-full">
              <div>{field.placeHolder}: </div>
              <input
                type={field.type}
                className=" px-4 py-2 w-full border-2 border-indigo-500 rounded-lg text-lg text-default focus:outline-none focus:border-3 focus:shadow-xl focus:shadow-indigo-800 focus:border-indigo-800 "
                />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EducationalExperience;
