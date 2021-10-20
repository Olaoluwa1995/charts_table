import React from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { COLORS } from "../styles/theme";

const SearchInput: React.FC<any> = ({ value, onChange, placeholder }) => {
  return (
    <InputGroup
      w="15%"
      ml="auto"
      _hover={{
        w: "40%",
      }}
    >
      <Input
        bgColor="whiteAlpha.800"
        _focus={{
          borderColor: COLORS.PRIMARY_COLOR,
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <InputRightElement
        children={<SearchIcon color={COLORS.PRIMARY_COLOR} />}
      />
    </InputGroup>
  );
};

export default SearchInput;
