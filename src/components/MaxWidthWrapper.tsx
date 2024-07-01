import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
	className,
	children
}: {
	className?: String;
	children: ReactNode;
}) => {
	//prettier-ignore
	return (
    <div className={cn(
      "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
      className)}>
      {children}
    </div>
  )
};

export default MaxWidthWrapper;
