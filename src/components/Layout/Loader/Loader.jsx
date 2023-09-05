import { VStack, Spinner } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <VStack height={'100vh'} justifyContent={'center'}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purple.500"
        size="xl"
      />
    </VStack>
  );
};

export default Loader;
