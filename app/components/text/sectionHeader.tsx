import React from "react";

interface SectionHeader {
  sectionName: string;
  title: string;
}

export default function SectionHeader(props: SectionHeader) {
  return (
    <div className="flex flex-col items-start justify-center font-poppins font-semibold gap-4">
      <p className="text-mauve-100  text-[20px]">{props.sectionName}</p>
      <h1 className="text-white text-[40px]">{props.title}</h1>
    </div>
  );
}
