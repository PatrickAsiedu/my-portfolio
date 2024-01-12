import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-40 2xl:max-w-[1536px] mx-auto  ">
      {children}
    </div>
  );
};

export default Container;
