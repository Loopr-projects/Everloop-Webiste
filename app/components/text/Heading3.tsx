import React, { Children } from "react";

export default function Heading3({
  children,
}: Readonly<{
  children: string;
}>) {
  return (
    <h3 className="font-poppins font-medium text-[24px] text-white">
      {children}
    </h3>
  );
}
