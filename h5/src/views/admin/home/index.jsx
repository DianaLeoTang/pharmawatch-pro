/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
  Select,
  FormLabel,
} from "@chakra-ui/react";
// Custom components
import ArticleCard from "./components/ArticleCard";
import SearchBar from "./components/SearchBar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 模拟文章数据
const mockArticles = [
  {
    id: 1,
    title: "新型抗肿瘤药物的临床研究进展",
    author: "张医生",
    publishDate: "2024-01-15",
    summary: "本文综述了近年来新型抗肿瘤药物在临床研究中的最新进展，包括免疫治疗、靶向治疗等前沿领域的发展趋势和应用前景。",
    category: "临床研究",
  },
  {
    id: 2,
    title: "药物代谢动力学在个体化用药中的应用",
    author: "李药师",
    publishDate: "2024-01-14",
    summary: "探讨药物代谢动力学参数在个体化用药方案制定中的重要作用，分析基因多态性对药物代谢的影响机制。",
    category: "药理学",
  },
  {
    id: 3,
    title: "抗生素耐药性的机制与应对策略",
    author: "王教授",
    publishDate: "2024-01-13",
    summary: "深入分析细菌对抗生素产生耐药性的分子机制，并提出相应的临床应对策略和预防措施。",
    category: "感染药学",
  },
  {
    id: 4,
    title: "心血管药物的药物相互作用研究",
    author: "赵医生",
    publishDate: "2024-01-12",
    summary: "系统梳理常见心血管药物之间的相互作用，为临床合理用药提供参考依据。",
    category: "心血管药学",
  },
  {
    id: 5,
    title: "中药现代化研究的最新进展",
    author: "陈研究员",
    publishDate: "2024-01-11",
    summary: "介绍中药现代化研究的最新成果，包括有效成分提取、作用机制阐明等方面的突破性进展。",
    category: "中药学",
  },
  {
    id: 6,
    title: "儿童用药安全性与剂量调整",
    author: "刘药师",
    publishDate: "2024-01-10",
    summary: "探讨儿童用药的特殊性，分析不同年龄段儿童的药物代谢特点及剂量调整原则。",
    category: "儿科药学",
  },
];

export default function Home() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const navigate = useNavigate();

  // 获取所有分类
  const categories = ["全部", ...new Set(mockArticles.map((article) => article.category))];

  // 过滤文章
  const filteredArticles = mockArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchValue.toLowerCase());
    const matchesCategory =
      selectedCategory === "全部" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleArticleClick = (articleId) => {
    navigate(`/admin/article/${articleId}`);
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* 搜索和筛选区域 */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "start", md: "center" }}
        justify="space-between"
        mb="30px"
        gap="20px"
      >
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="搜索文章标题或内容..."
        />
        <Flex align="center" gap="12px">
          <FormLabel
            color={textColor}
            fontSize="sm"
            fontWeight="600"
            mb="0"
            whiteSpace="nowrap"
          >
            分类筛选:
          </FormLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            w={{ base: "100%", md: "200px" }}
            borderRadius="15px"
            fontSize="sm"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>

      {/* 文章列表标题 */}
      <Text
        color={textColor}
        fontSize="2xl"
        fontWeight="700"
        mb="20px"
        lineHeight="100%"
      >
        药学文章流
      </Text>

      {/* 文章列表 */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              author={article.author}
              publishDate={article.publishDate}
              summary={article.summary}
              category={article.category}
              onClick={() => handleArticleClick(article.id)}
            />
          ))
        ) : (
          <Box
            p="40px"
            textAlign="center"
            color={textColor}
            fontSize="lg"
            fontWeight="500"
          >
            暂无匹配的文章
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
}

