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
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import st from '../../../assets/images/st.jpeg';
import MovieModal from './MovieModal';

const AdminMovies = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const movies = [
    {
      _id: 'vjsdvjsvksvd',
      title: 'Stranger Things 2',
      category: 'Science Friction',
      poster: {
        url: st,
      },
      createdBy: 'Netflix',
      views: 18000,
      numOfVideos: 9,
    },
  ];

  const movieDetailsHandler = id => {
    onOpen();
    console.log(id);
  };
  const DeleteUserhandler = id => {
    console.log(id);
  };

  const DeleteEpisodeHandler = (movieId, episodeId) => {
    console.log(episodeId, movieId);
  };
  const AddEpisodeHandler = (e, movieId, title, desc, video) => {
    e.preventDefault();
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box overflowX={'auto'} p={['0', '8']}>
        <Heading
          my={16}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          All Available Movies
        </Heading>
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Users</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Provider</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Episodes</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {movies.map(item => (
                <Row
                  item={item}
                  key={item._id}
                  movieDetailsHandler={movieDetailsHandler}
                  DeleteUserhandler={DeleteUserhandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <MovieModal
          isOpen={isOpen}
          onClose={onClose}
          id={'hsvklkbejvkwe'}
          movieTitle={'Stranger Things 2'}
          DeleteButtonhandler={DeleteEpisodeHandler}
          AddEpisodeHandler={AddEpisodeHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

function Row({ item, movieDetailsHandler, DeleteUserhandler }) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex'}>
          <Button
            color="purple.500"
            variant={'outline'}
            onClick={() => movieDetailsHandler(item._id)}
          >
            View Episodes
          </Button>
          <Button
            color="purple.500"
            variant={'outline'}
            onClick={() => DeleteUserhandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminMovies;
