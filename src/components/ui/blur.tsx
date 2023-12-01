import { cn } from "@/lib/tailwind";
import React from "react";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Blur = React.forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          `w-[250px] h-[250px] absolute rounded-full 
          -z-50 blur-[350px] ${className}`
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
export default Blur;
