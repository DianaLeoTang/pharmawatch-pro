import React from "react";
// Chakra imports
import {
  Flex,
  Text,
  useColorModeValue,
  Badge,
  Icon,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import { MdArticle, MdAccessTime } from "react-icons/md";

export default function ArticleCard(props) {
  const { title, author, publishDate, summary, category, onClick } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const bgItem = useColorModeValue(
    { bg: "white", boxShadow: "0px 40px 58px -20px rgba(112, 144, 176, 0.12)" },
    { bg: "navy.700", boxShadow: "unset" }
  );

  return (
    <Card
      _hover={bgItem}
      bg="transparent"
      boxShadow="unset"
      px="24px"
      py="21px"
      transition="0.2s linear"
      cursor="pointer"
      onClick={onClick}
    >
      <Flex direction="column" gap="12px">
        <Flex align="center" justify="space-between">
          <Flex align="center" gap="8px">
            <Icon as={MdArticle} color="brand.500" w="20px" h="20px" />
            <Text
              color={textColor}
              fontSize="lg"
              fontWeight="700"
              lineHeight="100%"
            >
              {title}
            </Text>
          </Flex>
          {category && (
            <Badge colorScheme="brand" fontSize="xs" px="8px" py="4px">
              {category}
            </Badge>
          )}
        </Flex>
        <Text
          color={textColorSecondary}
          fontSize="sm"
          fontWeight="400"
          noOfLines={2}
        >
          {summary}
        </Text>
        <Flex align="center" justify="space-between">
          <Text color={textColorSecondary} fontSize="xs" fontWeight="400">
            {author}
          </Text>
          <Flex align="center" gap="4px">
            <Icon as={MdAccessTime} color={textColorSecondary} w="14px" h="14px" />
            <Text color={textColorSecondary} fontSize="xs" fontWeight="400">
              {publishDate}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

