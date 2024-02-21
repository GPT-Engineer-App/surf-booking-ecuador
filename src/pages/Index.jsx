import React from "react";
import { Box, Heading, Text, Button, Container, Link, AspectRatio } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      {/* Hero section */}
      <Box textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={3}>
          Ecuadorian Surf School
        </Heading>
        <Text fontSize="xl">Experience the best surfing classes and premium surfboard rentals.</Text>
      </Box>

      {/* Call to action section */}
      <Box mb={10}>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg" as={Link} href="#booking">
          Book Your Surf Class or Rental
        </Button>
      </Box>

      {/* Calendly booking iframe */}
      <Box id="booking" boxShadow="xl" borderRadius="lg" overflow="hidden">
        <Heading as="h2" size="lg" p={5} bg="teal.500" color="white">
          Book Your Session
        </Heading>
        <AspectRatio ratio={16 / 9}>
          <iframe src="https://calendly.com/jeanavocat" title="Surf Class/Rental Booking" frameBorder="0"></iframe>
        </AspectRatio>
      </Box>
    </Container>
  );
};

export default Index;
