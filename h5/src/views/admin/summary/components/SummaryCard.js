import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Icon,
  Badge,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import { MdSummarize, MdAccessTime } from "react-icons/md";

export default function SummaryCard(props) {
  const { title, content, date, tags } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");

  return (
    <Card p="30px" mb="20px">
      <Flex align="center" gap="12px" mb="20px">
        <Icon as={MdSummarize} color="brand.500" w="28px" h="28px" />
        <Text
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          {title}
        </Text>
      </Flex>
      <Flex align="center" gap="8px" mb="20px">
        <Icon as={MdAccessTime} color={textColorSecondary} w="18px" h="18px" />
        <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
          {date}
        </Text>
      </Flex>
      {tags && tags.length > 0 && (
        <Flex gap="8px" mb="20px" wrap="wrap">
          {tags.map((tag, index) => (
            <Badge key={index} colorScheme="brand" fontSize="xs" px="8px" py="4px">
              {tag}
            </Badge>
          ))}
        </Flex>
      )}
      <Box
        color={textColorSecondary}
        fontSize="md"
        lineHeight="200%"
        whiteSpace="pre-wrap"
      >
        {content}
      </Box>
    </Card>
  );
}

