import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Badge,
  Icon,
  Divider,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import { MdArticle, MdAccessTime, MdPerson, MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ArticleDetail(props) {
  const { article } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const navigate = useNavigate();

  if (!article) {
    return (
      <Card p="40px" textAlign="center">
        <Text color={textColor} fontSize="lg" fontWeight="500">
          文章不存在
        </Text>
      </Card>
    );
  }

  return (
    <Card p="30px" mb="20px">
      {/* 返回按钮 */}
      <Button
        leftIcon={<Icon as={MdArrowBack} />}
        variant="ghost"
        colorScheme="brand"
        mb="20px"
        onClick={() => navigate("/admin/home")}
      >
        返回文章列表
      </Button>

      {/* 文章标题 */}
      <Flex align="center" gap="12px" mb="20px">
        <Icon as={MdArticle} color="brand.500" w="28px" h="28px" />
        <Text
          color={textColor}
          fontSize="2xl"
          fontWeight="700"
          lineHeight="120%"
        >
          {article.title}
        </Text>
      </Flex>

      {/* 文章元信息 */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "start", md: "center" }}
        gap="20px"
        mb="30px"
        wrap="wrap"
      >
        <Flex align="center" gap="8px">
          <Icon as={MdPerson} color={textColorSecondary} w="18px" h="18px" />
          <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
            {article.author}
          </Text>
        </Flex>
        <Flex align="center" gap="8px">
          <Icon as={MdAccessTime} color={textColorSecondary} w="18px" h="18px" />
          <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
            {article.publishDate}
          </Text>
        </Flex>
        {article.category && (
          <Badge colorScheme="brand" fontSize="sm" px="12px" py="6px">
            {article.category}
          </Badge>
        )}
      </Flex>

      <Divider mb="30px" />

      {/* 文章摘要 */}
      {article.summary && (
        <Box mb="30px">
          <Text
            color={textColor}
            fontSize="lg"
            fontWeight="600"
            mb="12px"
          >
            摘要
          </Text>
          <Text
            color={textColorSecondary}
            fontSize="md"
            lineHeight="180%"
          >
            {article.summary}
          </Text>
        </Box>
      )}

      <Divider mb="30px" />

      {/* 文章正文 */}
      <Box>
        <Text
          color={textColor}
          fontSize="lg"
          fontWeight="600"
          mb="20px"
        >
          正文
        </Text>
        <Box
          color={textColorSecondary}
          fontSize="md"
          lineHeight="200%"
          whiteSpace="pre-wrap"
        >
          {article.content || article.summary}
        </Box>
      </Box>
    </Card>
  );
}

