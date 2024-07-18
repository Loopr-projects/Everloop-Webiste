import React, { Children } from "react";

export default function Heading1({
  children,
}: Readonly<{
  children: string;
}>) {
  return (
    <h1 className="font-poppins font-semibold  text-white text-[40px]">
      {children}
    </h1>
  );
}
