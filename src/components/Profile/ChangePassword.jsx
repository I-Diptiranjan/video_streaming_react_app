import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { changePassword } from '../../redux/Actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
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
    }
  }, [dispatch, error, message]);

  return (
    <Container py={16} minH={'92vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          my={16}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          Change Password
        </Heading>
        <VStack spacing={8}>
          <Input
            required
            type="password"
            focusBorderColor="purple.400"
            placeholder="Old Password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />
          <Input
            required
            type="password"
            focusBorderColor="purple.400"
            placeholder="Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <Button
            w={'full'}
            colorScheme="purple"
            type="submit"
            isLoading={loading}
          >
            Change Password
          </Button>
        </VStack>
      </form>
      <Toaster />
    </Container>
  );
};

export default ChangePassword;
