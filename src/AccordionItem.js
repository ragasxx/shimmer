import React, { useState } from "react";

const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="border border-b-lime-950">
      <div
        className="p-2 m-2 font-bold bg-gray-200 flex justify-between cursor-pointer"
        onClick={() => setIsOpen()}
      >
        <span>{title}</span>
        <span className="cursor-pointer">⬇️</span>
      </div>
      {isOpen && <div className="p-2 m-2">{body}</div>}
    </div>
  );
};

export default AccordionItem;
