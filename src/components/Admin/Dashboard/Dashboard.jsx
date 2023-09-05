import {
  Grid,
  Heading,
  Box,
  Text,
  Stack,
  HStack,
  Progress,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDashboardStats } from '../../../redux/Actions/admin';
import Loader from '../../Layout/Loader/Loader';

const DataBox = ({ title, qty, qtypercent, profit }) => (
  <Box width={['full', '20%']} boxShadow={'md'} padding={8} borderRadius={'lg'}>
    <Text>{title}</Text>
    <HStack spacing={6}>
      <Text fontSize={'2xl'} children={qty} fontWeight={'bold'} />
      <HStack>
        <Text>{qtypercent}%</Text>
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="Red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.5}>Since Last Month</Text>
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py={4} px={['0', '20']}>
    <Heading size={'sm'} mb={2}>
      {title}
    </Heading>
    <HStack w={'full'} alignItems={'center'}>
      <Text>{profit ? 0 : -value}%</Text>
      <Progress w={'full'} value={profit ? value : 0} colorScheme="purple" />
      <Text>{value > 100 ? value : 100}%</Text>
    </HStack>
  </Box>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    loading,
    stats,
    usersCount,
    viewsCount,
    subscriptionsCount,
    subscriptionsPercent,
    viewsPercent,
    usersPercent,
    viewProfit,
    subscriptionProfit,
    userProfit,
  } = useSelector(state => state.admin);
  useEffect(() => {
    dispatch(getDashboardStats());
  }, [dispatch]);
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      {loading || !stats ? (
        <Loader />
      ) : (
        <>
          <Box boxSizing="border-box" py={16} px={['4', '0']}>
            <Text textAlign={'center'} opacity={0.5}>
              Last Change Was on{' '}
              {String(new Date(stats[11].createdAt)).split('G')[0]}
            </Text>
            <Heading ml={['0', '16']} mb={'16'} textAlign={['center', 'left']}>
              Dashboard
            </Heading>
            <Stack
              direction={['column', 'row']}
              minH={'24'}
              justifyContent={'space-evenly'}
            >
              <DataBox
                title="Views"
                qty={viewsCount}
                qtypercent={viewsPercent}
                profit={viewProfit}
              />
              <DataBox
                title="Users"
                qty={usersCount}
                qtypercent={usersPercent}
                profit={userProfit}
              />
              <DataBox
                title="Subscription"
                qty={subscriptionsCount}
                qtypercent={subscriptionsPercent}
                profit={subscriptionProfit}
              />
            </Stack>
            <Box
              margin={['0', '16']}
              p={['0', '16']}
              mt={['4', '16']}
              boxShadow={'lg'}
              borderRadius={'lg'}
            >
              <Heading
                textAlign={['center', 'left']}
                size={'md'}
                pt={['8', '0']}
                ml={['0', '16']}
              >
                Views Graph
              </Heading>
              <LineChart views={stats.map(item => item.views)} />
              {/* {Line Graph Here} */}
            </Box>
            <Grid templateColumns={['1fr', '2fr 1fr']}>
              <Box p={4}>
                <Heading
                  textAlign={['center', 'left']}
                  size={'md'}
                  ml={['0', '16']}
                  my={8}
                >
                  Progress bar
                </Heading>
                <Box>
                  <Bar title="Views" value={viewsPercent} profit={viewProfit} />
                  <Bar title="Users" value={usersPercent} profit={userProfit} />
                  <Bar
                    title="Subscription"
                    value={subscriptionsPercent}
                    profit={subscriptionProfit}
                  />
                </Box>
              </Box>
              <Box p={['0', '16']} boxSizing="border-box">
                <Heading size={'md'} mb={['4']} textAlign={'center'}>
                  Users
                </Heading>
                <DoughnutChart
                  users={[subscriptionsCount, usersCount - subscriptionsCount]}
                />
              </Box>
            </Grid>
          </Box>
        </>
      )}
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
