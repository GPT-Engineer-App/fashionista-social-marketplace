import { Box, Heading, Text, VStack, Button, Flex } from "@chakra-ui/react";
import { FaDollarSign, FaStar, FaChalkboardTeacher, FaUserTie } from "react-icons/fa";

const Monetization = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Monetization Options</Heading>
      <VStack spacing={4} align="start">
        <Flex align="center">
          <FaDollarSign size="24px" />
          <Text ml={2}>Paid Subscriptions: Offer exclusive content to subscribers.</Text>
        </Flex>
        <Flex align="center">
          <FaStar size="24px" />
          <Text ml={2}>Exclusive Content: Share premium content with your audience.</Text>
        </Flex>
        <Flex align="center">
          <FaChalkboardTeacher size="24px" />
          <Text ml={2}>Workshops: Host workshops and charge for participation.</Text>
        </Flex>
        <Flex align="center">
          <FaUserTie size="24px" />
          <Text ml={2}>Consultations: Offer one-on-one consultations for a fee.</Text>
        </Flex>
      </VStack>
      <Box mt={8}>
        <Heading size="md" mb={4}>Commission System</Heading>
        <Text>The platform takes a percentage of sales, providing a revenue stream for both creators and the platform.</Text>
      </Box>
    </Box>
  );
};

export default Monetization;