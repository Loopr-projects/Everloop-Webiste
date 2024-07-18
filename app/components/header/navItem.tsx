import React from "react";

export default function navItem({
  children,
  target,
}: Readonly<{
  children: string;
  target: string;
}>) {
  return (
    <a href={target}>
      <p className="font-poppins font-medium text-[16px] text-white">
        {children}
      </p>
    </a>
  );
}
