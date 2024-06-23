import { Box, Heading, Text, VStack, Button, Flex } from "@chakra-ui/react";
import { FaMagic } from "react-icons/fa";

const AIEditing = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>AI Editing Tools</Heading>
      <VStack spacing={4} align="start">
        <Flex align="center">
          <FaMagic size="24px" />
          <Text ml={2}>Enhance your photos and videos with AI-powered editing tools.</Text>
        </Flex>
        <Button colorScheme="teal" mt={4}>Try AI Editing</Button>
      </VStack>
    </Box>
  );
};

export default AIEditing;