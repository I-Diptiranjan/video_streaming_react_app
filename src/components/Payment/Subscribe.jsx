import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p={16}>
      <Heading children="Welcome" textAlign={'center'} my={'8'} />
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={0}
        p={4}
      >
        <Box bg={'purple.400'} p={4} borderRadius={16} fontWeight={'bolder'}>
          <Text children={`Pro Pack - Rs:499.00/- only`} color={'white'} />
        </Box>
        <Box p={4}>
          <VStack textAlign={'center'} px={8} mt={4} spacing={8}>
            <Text children="Join Pro pack and get Access to All Content" />
            <Heading size={'md'} children="Rs : 499/- Only" />
          </VStack>

          <Button colorScheme="purple" variant={'solid'} w={'full'} my={8}>
            Buy Now
          </Button>
        </Box>
        <Box bg={'blackAlpha.600'} p={4} borderRadius={10}>
          <Heading
            color={'white'}
            textTransform={'uppercase'}
            size={'sm'}
            children="100% Refund on Cancellation"
          />
          <Text children="* Terms and Condition Applied" fontSize={'small'} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
