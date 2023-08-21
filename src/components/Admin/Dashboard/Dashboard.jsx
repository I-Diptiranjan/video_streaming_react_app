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
      <Text>{value > 100 ? value : 100}</Text>
    </HStack>
  </Box>
);

const Dashboard = () => {
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box boxSizing="border-box" py={16} px={['4', '0']}>
        <Text textAlign={'center'} opacity={0.5}>
          Last Change Was on {String(new Date()).split('G')[0]}
        </Text>
        <Heading ml={['0', '16']} mb={'16'} textAlign={['center', 'left']}>
          Dashboard
        </Heading>
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <DataBox title="Views" qty={123} qtypercent={30} profit={true} />
          <DataBox title="Users" qty={1673} qtypercent={20} profit={true} />
          <DataBox
            title="Subscription"
            qty={123}
            qtypercent={90}
            profit={false}
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
          <LineChart />
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
              <Bar title="Views" value={30} profit={true} />
              <Bar title="Users" value={49} profit={true} />
              <Bar title="Subscription" value={90} profit={false} />
            </Box>
          </Box>
          <Box p={['0', '16']} boxSizing="border-box">
            <Heading size={'md'} mb={['4']} textAlign={'center'}>
              Users
            </Heading>
            <DoughnutChart />
            {/* Donougnt Graph */}
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
