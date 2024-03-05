import React from "react";
import { LANG } from "./utils/langConstant";

const About = ({ lang }) => {
  console.log(lang);

  const data = LANG[lang];
  console.log(data);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold my-5">{data.title}</h1>
        <p>{data.description}</p>
      </div>

      <div>
        <h1 className="text-2xl font-bold my-5">{data.title2}</h1>
        <p>{data.des2}</p>
      </div>

      <div>
        <h1 className="text-2xl font-bold my-5">{data.title3}</h1>
        <p>{data.des3}</p>
      </div>
    </div>
  );
};

export default About;
