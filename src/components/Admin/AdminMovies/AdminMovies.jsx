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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllMovies, getMovieEpisodes } from '../../../redux/Actions/movie';
import { useState } from 'react';
import {
  addEpisodes,
  deleteEpisodes,
  deleteMovie,
} from '../../../redux/Actions/admin';
import { toast } from 'react-hot-toast';

const AdminMovies = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { movies, episodes } = useSelector(state => state.movie);
  const { loading, error, message } = useSelector(state => state.admin);

  const dispatch = useDispatch();

  const [movieId, setMovieId] = useState('');
  const [movieTitle, setMovieTitle] = useState('');

  const movieDetailsHandler = (movieId, title) => {
    dispatch(getMovieEpisodes(movieId));
    onOpen();
    setMovieId(movieId);
    setMovieTitle(title);
  };
  const DeleteButtonHandler = id => {
    dispatch(deleteMovie(id));
  };

  const DeleteEpisodeHandler = async (movieId, episodeId) => {
    await dispatch(deleteEpisodes(movieId, episodeId));
    dispatch(getMovieEpisodes(movieId));
  };
  const AddEpisodeHandler = async (e, movieId, title, desc, video) => {
    e.preventDefault();
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('description', desc);
    myForm.append('file', video);
    await dispatch(addEpisodes(movieId, myForm));
    dispatch(getMovieEpisodes(movieId));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    dispatch(getAllMovies());
  }, [dispatch, message, error]);

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
                  DeleteButtonHandler={DeleteButtonHandler}
                  loading={loading}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <MovieModal
          isOpen={isOpen}
          onClose={onClose}
          id={movieId}
          movieTitle={movieTitle}
          DeleteButtonhandler={DeleteEpisodeHandler}
          AddEpisodeHandler={AddEpisodeHandler}
          episodes={episodes}
          loading={loading}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

function Row({ item, movieDetailsHandler, DeleteButtonHandler, loading }) {
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
            onClick={() => movieDetailsHandler(item._id, item.title)}
            isLoading={loading}
          >
            View Episodes
          </Button>
          <Button
            color="purple.500"
            variant={'outline'}
            onClick={() => DeleteButtonHandler(item._id)}
            isLoading={loading}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminMovies;
