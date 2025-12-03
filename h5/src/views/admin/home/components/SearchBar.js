import React from "react";
// Chakra imports
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import { MdSearch } from "react-icons/md";

export default function SearchBar(props) {
  const { placeholder, value, onChange } = props;
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const inputText = useColorModeValue("gray.700", "gray.300");

  return (
    <InputGroup me={{ base: "auto", lg: "20px" }} w={{ base: "100%", lg: "400px" }}>
      <InputLeftElement pointerEvents="none">
        <Icon as={MdSearch} color={searchIconColor} w="20px" h="20px" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeholder || "搜索文章..."}
        bg={inputBg}
        color={inputText}
        value={value}
        onChange={onChange}
        borderRadius="15px"
        fontSize="sm"
      />
    </InputGroup>
  );
}

