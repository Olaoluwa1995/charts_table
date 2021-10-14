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
      rounded="15px"
      fontSize={{ base: "0.7rem", md: "0.9rem" }}
      border="1px solid white"
      boxShadow="0px 8px 5px rgba(75, 93, 104, 0.1)"
      bgColor={COLORS.PRIMARY_COLOR}
      color="white"
      fontWeight="medium"
      h="3rem"
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
