import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder31: "rounded-radius315" };
const variants = {
  FillGray900: "bg-gray_900 text-gray_100",
  FillGray400b7: "bg-gray_400_b7 text-gray_900",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[20px] p-[23px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder31"]),
  variant: PropTypes.oneOf(["FillGray900", "FillGray400b7"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder31",
  variant: "FillGray900",
  size: "sm",
};

export { Button };
