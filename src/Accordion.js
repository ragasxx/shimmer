import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "title 1",
    body: "This is the first item accordions body",
  },
  {
    title: "title 2",
    body: "This is the second item accordions body",
  },
  {
    title: "title 3",
    body: "This is the third item accordions body",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="w-1/2 m-auto">
      {data.map((acc, i) => (
        <AccordionItem
          key={i}
          title={acc.title}
          body={acc.body}
          isOpen={i === openIndex}
          setIsOpen={() => {
            // if already that index is open then make it false
            if (i === openIndex) {
              setOpenIndex(-1);
            } else {
              setOpenIndex(i);
            }
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;
