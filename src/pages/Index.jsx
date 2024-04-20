import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Select, CheckboxGroup, Checkbox, Stack, Textarea, useToast, VStack, InputGroup, InputLeftAddon, Heading, Text } from "@chakra-ui/react";
import { FaUpload, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [form, setForm] = useState({
    uniqueNumber: '',
    // other form fields can be added here as needed
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={6}>Sample Request Form</Heading>
      <Box as="form" onSubmit={handleSubmit} border="1px" borderColor="gray.200" p={6} borderRadius="md" boxShadow="sm">
        <VStack spacing={4}>
          {/* Existing form fields */}
          {/* New section to display the shipping label if available */}
          {form.uniqueNumber && (
            <Box p={4} mt={4} bg="gray.100" borderRadius="md">
              <Text>Your Shipping Label:</Text>
              <Text fontWeight="bold">Cyklop CSC Att.: SampleLab M.Slot {form.uniqueNumber}</Text>
              <Text>Wilhelm Röntgenstraat 10</Text>
              <Text>8013NC Zwolle</Text>
              <Text>Nederland</Text>
            </Box>
          )}
          <Button leftIcon={<FaPaperPlane />} colorScheme="blue" type="submit">
            Submit Request
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
