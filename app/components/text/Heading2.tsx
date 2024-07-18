import React, { Children } from "react";

export default function Heading2({
  children,
}: Readonly<{
  children: string;
}>) {
  return (
    <h2 className="font-poppins font-medium text-[36px] text-white">
      {children}
    </h2>
  );
}
