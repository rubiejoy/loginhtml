import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[33px] xl:text-[42px] 2xl:text-[47px] 3xl:text-[56px] text-[65px]",
  h2: "font-normal lg:text-[18px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[35px]",
  h3: "font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[26px] text-[30px]",
  h4: "font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[20px]",
  h5: "font-light xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[16px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
