import { cn } from "@/lib/tailwind";
import "@/styles/loading.css";
import React from "react";

interface ILoading extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Loading({ className }: ILoading) {
  return (
    <div
      className={cn(
        `w-full h-screen -mt-[100px] px-10 flex items-center justify-center`,
        className
      )}
    >
      <span className="loader" />
    </div>
  );
}

export default Loading;
