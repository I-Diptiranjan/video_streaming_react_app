import {
  Container,
  Heading,
  Box,
  FormLabel,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { resetPassword } from '../../redux/Actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  const { loading, message, error } = useSelector(state => state.profile);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/login');
    }
  }, [dispatch, error, message]);

  return (
    <Container mt={40} h={'90vh'} py={20}>
      <VStack>
        <Heading children="Reset PassWord" textTransform={'uppercase'} />
        <form onSubmit={submitHandler} style={{ width: '60%' }}>
          <Box my={6}>
            <FormLabel htmlFor="password" children="Enter Your New Password" />
            <Input
              required
              id="password"
              type="password"
              focusBorderColor="purple.400"
              placeholder="********"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
          <Box>
            <Button
              variant={'solid'}
              justifyContent={'center'}
              alignItems={'center'}
              colorScheme="purple"
              type="submit"
              w={'full'}
              isLoading={loading}
            >
              Reset Password
            </Button>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default ResetPassword;
