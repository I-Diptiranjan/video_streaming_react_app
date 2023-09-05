import {
  Grid,
  Heading,
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeUserRole,
  deleteUser,
  getAllUsers,
} from '../../../redux/Actions/admin';
import Loader from '../../Layout/Loader/Loader';
import { toast } from 'react-hot-toast';

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error, message } = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(getAllUsers());
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, message, error]);

  const updateRoleHandler = id => {
    dispatch(changeUserRole(id));
  };
  const DeleteUserhandler = id => {
    dispatch(deleteUser(id));
  };
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box overflowX={'auto'} p={['0', '16']}>
        <Heading
          my={16}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          All Users
        </Heading>
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Users</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users &&
                users.map(item => (
                  <Row
                    item={item}
                    key={item._id}
                    updateRoleHandler={updateRoleHandler}
                    DeleteUserhandler={DeleteUserhandler}
                    loading={loading}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateRoleHandler, DeleteUserhandler, loading }) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        #
        {item.subscription && item.subscription.status === 'active'
          ? 'Active'
          : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex'}>
          <Button
            color="purple.500"
            variant={'outline'}
            onClick={() => updateRoleHandler(item._id)}
            isLoading={loading}
          >
            Change Role
          </Button>
          <Button
            color="purple.500"
            variant={'outline'}
            onClick={() => DeleteUserhandler(item._id)}
            isLoading={loading}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
