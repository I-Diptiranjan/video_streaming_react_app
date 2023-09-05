import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { Link, useSearchParams } from 'react-router-dom';
import { getMyProfile } from '../../redux/Actions/user';

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get('reference');

  return (
    <Container h={'90vh'} p={'16'}>
      <Heading my={8} textAlign={'center'}>
        You have Pro Pack{' '}
      </Heading>
      <VStack
        boxShadow={'lg'}
        p={4}
        pb={16}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box w={'full'} bg={'purple.400'} padding={4} borderRadius={'lg'}>
          <Text fontWeight={'bold'} textAlign={'center'}>
            Payment Success
          </Text>
        </Box>
        <Box padding={4}>
          <VStack textAlign={'center'} px={8} mt={4} spacing={8}>
            <Text>
              Congratulations !! You are a Pro Member. You have access to all
              Contents.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to={'/profile'}>
          <Button variant={'outline'} colorScheme="purple">
            Go to Profile
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
