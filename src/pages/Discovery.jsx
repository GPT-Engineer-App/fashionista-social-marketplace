import { Box, Heading, Text, VStack, Button, Flex } from "@chakra-ui/react";
import { FaSearch, FaStar, FaHandshake } from "react-icons/fa";

const Discovery = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Discovery and Recommendations</Heading>
      <VStack spacing={4} align="start">
        <Flex align="center">
          <FaSearch size="24px" />
          <Text ml={2}>Personalized Suggestions: Discover relevant creators, trends, and products based on your preferences.</Text>
        </Flex>
        <Flex align="center">
          <FaStar size="24px" />
          <Text ml={2}>Featured Content: Explore trending styles, new designer collections, and unique fashion finds.</Text>
        </Flex>
        <Flex align="center">
          <FaHandshake size="24px" />
          <Text ml={2}>Collaboration Facilitation: Promote partnerships between creators to expand the platform's offerings.</Text>
        </Flex>
        <Button colorScheme="green" mt={4}>Explore Now</Button>
      </VStack>
    </Box>
  );
};

export default Discovery;