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
  SimpleGrid,
  Text,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
// Custom components
import SummaryCard from "./components/SummaryCard";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import { MdSummarize, MdArticle, MdTrendingUp } from "react-icons/md";

// 模拟今日总结数据
const todaySummary = {
  date: new Date().toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  title: "今日药学研究总结",
  content: `基于今日收集的药学文献和研究动态，以下是主要发现和趋势：

1. **抗肿瘤药物研究进展**
   今日有多篇关于新型抗肿瘤药物的研究报道。免疫检查点抑制剂在多种实体瘤中显示出良好的疗效，特别是在联合治疗方案中。CAR-T细胞疗法在血液系统肿瘤中的应用也在不断扩展。

2. **药物代谢与个体化用药**
   药物基因组学研究为个体化用药提供了新的视角。多项研究探讨了基因多态性对药物代谢的影响，为临床用药剂量调整提供了科学依据。

3. **抗生素耐药性应对**
   面对日益严重的抗生素耐药性问题，研究人员正在探索新的治疗策略。噬菌体疗法、抗菌肽等新型抗菌手段显示出潜在的应用前景。

4. **心血管药物安全性**
   多项大规模临床研究关注心血管药物的长期安全性。新型抗凝药物和降脂药物在真实世界中的安全性数据不断积累，为临床决策提供参考。

5. **中药现代化研究**
   中药有效成分的提取和纯化技术不断改进，作用机制的阐明也更加深入。网络药理学方法为理解中药的复杂作用机制提供了新的工具。

**今日重点关注：**
- 个体化用药方案的优化
- 新型抗菌药物的研发进展
- 药物相互作用的临床管理

**建议研究方向：**
- 加强药物基因组学在临床实践中的应用
- 探索多靶点药物的研发策略
- 完善药物安全性监测体系`,
  tags: ["抗肿瘤药物", "个体化用药", "抗生素耐药性", "心血管药学", "中药现代化"],
};

// 统计数据
const statsData = [
  {
    name: "今日文章数",
    value: "24",
    icon: MdArticle,
  },
  {
    name: "重点关注领域",
    value: "5",
    icon: MdTrendingUp,
  },
  {
    name: "研究趋势",
    value: "上升",
    icon: MdSummarize,
  },
];

export default function Summary() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "white");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* 页面标题 */}
      <Flex align="center" gap="12px" mb="30px">
        <Icon as={MdSummarize} color="brand.500" w="32px" h="32px" />
        <Text
          color={textColor}
          fontSize="2xl"
          fontWeight="700"
          lineHeight="100%"
        >
          今日 LLM 药学总结
        </Text>
      </Flex>

      {/* 统计卡片 */}
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 3 }}
        gap="20px"
        mb="30px"
      >
        {statsData.map((stat, index) => (
          <MiniStatistics
            key={index}
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={stat.icon} color={brandColor} />
                }
              />
            }
            name={stat.name}
            value={stat.value}
          />
        ))}
      </SimpleGrid>

      {/* 总结内容 */}
      <SummaryCard
        title={todaySummary.title}
        content={todaySummary.content}
        date={todaySummary.date}
        tags={todaySummary.tags}
      />
    </Box>
  );
}

