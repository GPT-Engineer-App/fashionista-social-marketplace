import { Box, Heading, Text, VStack, Button, Flex } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";

const Collaboration = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Collaboration Features</Heading>
      <VStack spacing={4} align="start">
        <Flex align="center">
          <FaUsers size="24px" />
          <Text ml={2}>Collaborate with models and designers using AI-enhanced visuals.</Text>
        </Flex>
        <Button colorScheme="purple" mt={4}>Start Collaborating</Button>
      </VStack>
    </Box>
  );
};

export default Collaboration;