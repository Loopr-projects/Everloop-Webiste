import React from "react";

export default function button({
  children,
}: Readonly<{
  children: string;
}>) {
  return (
    <button className="min-w-32 rounded-full text-white py-3 px-4 bg-mauve-300 font-medium font-poppins text-[16px]">
      {children}
    </button>
  );
}
