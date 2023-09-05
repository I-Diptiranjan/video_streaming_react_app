import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { buySubscripton, getMyProfile } from '../../redux/Actions/user';
import { server } from '../../redux/Store';
import { useNavigate } from 'react-router-dom';

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');

  const navigate = useNavigate();

  const subscribeHandler = async () => {
    const { data } = await axios.get(`${server}/razorpaykey`);
    setKey(data.key);
    dispatch(buySubscripton());
  };

  const { loading, message, error, subscriptionId } = useSelector(
    state => state.subscription
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      const openPopup = async () => {
        console.log(subscriptionId);
        const options = {
          key,
          name: 'The Cimenatic Universe',
          description: 'Get Access to all Premium Contents',
          subscription_id: subscriptionId,
          // callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          theme: {
            color: '#800080',
          },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      };
      openPopup();
      navigate('/paymentsuccess');
    }
  }, [dispatch, error, message, user.name, user.email, key, subscriptionId]);

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
          <Text children={`Pro Pack - Rs:199.00/- only`} color={'white'} />
        </Box>
        <Box p={4}>
          <VStack textAlign={'center'} px={8} mt={4} spacing={8}>
            <Text children="Join Pro pack and get Access to All Content" />
            <Heading size={'md'} children="Rs : 199/- Only" />
          </VStack>

          <Button
            colorScheme="purple"
            variant={'solid'}
            w={'full'}
            my={8}
            onClick={subscribeHandler}
            isLoading={loading}
          >
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
