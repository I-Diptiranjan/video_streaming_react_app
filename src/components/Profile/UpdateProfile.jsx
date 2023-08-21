import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Container py={16} minH={'92vh'}>
      <form
        action="
    "
      >
        <Heading
          my={16}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          Update Profile
        </Heading>
        <VStack spacing={8}>
          <Input
            type="text"
            focusBorderColor="purple.400"
            placeholder="Name"
            value={name}
            orChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            focusBorderColor="purple.400"
            placeholder="Emaik"
            value={email}
            orChange={e => setEmail(e.target.value)}
          />

          <Button w={'full'} colorScheme="purple" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
