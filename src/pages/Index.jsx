import { Container, Text, VStack, Button, Box, Image } from "@chakra-ui/react";
import { FaTshirt, FaEye, FaMoneyBillWave, FaMagic, FaUsers, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [showTryOn, setShowTryOn] = useState(false);
  const [showFashionShow, setShowFashionShow] = useState(false);
  const navigate = useNavigate();

  const handleTryOnClick = () => {
    setShowTryOn(true);
    setShowFashionShow(false);
  };

  const handleFashionShowClick = () => {
    setShowFashionShow(true);
    setShowTryOn(false);
  };

  const handleMonetizationClick = () => {
    navigate("/monetization");
  };

  const handleAIEditingClick = () => {
    navigate("/ai-editing");
  };

  const handleCollaborationClick = () => {
    navigate("/collaboration");
  };

  const handleDiscoveryClick = () => {
    navigate("/discovery");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Fashionista AR Experience</Text>
        <Button leftIcon={<FaTshirt />} colorScheme="teal" onClick={handleTryOnClick}>
          Virtual Try-On
        </Button>
        <Button leftIcon={<FaEye />} colorScheme="purple" onClick={handleFashionShowClick}>
          AR Fashion Show
        </Button>
        <Button leftIcon={<FaMoneyBillWave />} colorScheme="green" onClick={handleMonetizationClick}>
          Monetization Options
        </Button>
        <Button leftIcon={<FaMagic />} colorScheme="blue" onClick={handleAIEditingClick}>
          AI Editing Tools
        </Button>
        <Button leftIcon={<FaUsers />} colorScheme="orange" onClick={handleCollaborationClick}>
          Collaboration Features
        </Button>
        <Button leftIcon={<FaSearch />} colorScheme="red" onClick={handleDiscoveryClick}>
          Discovery and Recommendations
        </Button>
        
        {showTryOn && (
          <Box mt={4}>
            <Text fontSize="xl">Virtual Try-On Feature Coming Soon!</Text>
            <Image src="/images/virtual-try-on.png" alt="Virtual Try-On" />
          </Box>
        )}
        {showFashionShow && (
          <Box mt={4}>
            <Text fontSize="xl">AR Fashion Show Feature Coming Soon!</Text>
            <Image src="/images/ar-fashion-show.png" alt="AR Fashion Show" />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;