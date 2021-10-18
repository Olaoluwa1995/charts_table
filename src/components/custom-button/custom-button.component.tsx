import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../styles/theme";

export type CustomButtonProps = {
  to?: string;
} & ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <Button
      overflowX="hidden"
      rounded={{ base: "10px", md: "15px" }}
      fontSize={{ base: "0.7rem", md: "0.8rem" }}
      border="1px solid white"
      boxShadow="0px 8px 5px rgba(75, 93, 104, 0.1)"
      bgColor={COLORS.PRIMARY_COLOR}
      color="white"
      fontWeight="medium"
      onClick={(e) => {
        e.preventDefault();
        window.location.href =
          "https://dashboard.paymyrent.ng/account/register";
      }}
      h={{ base: "2rem", md: "2.5rem" }}
      _focus={{
        border: "none",
      }}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
