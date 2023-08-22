import {
  Box,
  Button,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Stack,
  Text,
  VStack,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

import { fileUploadCss } from '../../Auth/Register';

const MovieModal = ({
  isOpen,
  onClose,
  id,
  DeleteButtonhandler,
  AddEpisodeHandler,
  movieTitle,
  episodes = [],
}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const styleInputFile = {
    '&::file-selector-button': fileUploadCss,
  };

  const videoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  const HandleClose = () => {
    setVideo('');
    setDesc('');
    setVideoPrev('');
    setTitle('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={HandleClose}
      scrollBehavior="inside"
    >
      <ModalContent>
        {' '}
        <ModalCloseButton onClick={HandleClose} />
        <ModalHeader>{movieTitle}</ModalHeader>
        <ModalBody padding={16}>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={5}>
                <Heading>{movieTitle}</Heading>
                <Heading size={'md'} opacity={0.7}>{`${id}`}</Heading>
              </Box>
              <Heading size={'lg'}>Episodes</Heading>
              <VideoCard
                title={'Episode 1'}
                desc={'This is the first episode'}
                num={1}
                episodeId={'jhdsivksdj'}
                movieId={id}
                DeleteButtonhandler={DeleteButtonhandler}
                lectures
              />
            </Box>

            <Box>
              <form
                onSubmit={e => AddEpisodeHandler(e, id, title, desc, video)}
              >
                <VStack spacing={4}>
                  <Heading
                    children="Add Episodes"
                    size={'md'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    focusBorderColor="purple.400"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.400"
                    placeholder="Description"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                  />
                  <Input
                    type="file"
                    css={styleInputFile}
                    required
                    accept="video/mp4"
                    onChange={videoHandler}
                    focusBorderColor="purple"
                  />
                  {video && (
                    <video
                      src={videoPrev}
                      controlsList="nodownload"
                      controls
                    ></video>
                  )}
                  <Button w={'full'} type="submit" colorScheme="purple">
                    {' '}
                    Add{' '}
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={HandleClose}
            variant={'outline'}
            colorScheme="purple"
            fontWeight={'bolder'}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MovieModal;

function VideoCard({
  title,
  desc,
  num,
  episodeId,
  movieId,
  DeleteButtonhandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={8}
      borderRadius={'lg'}
      boxShadow={'xl'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`${num}:-  ${title}`} />

        <Text>{desc}</Text>
      </Box>{' '}
      <Button>
        <RiDeleteBin7Fill
          color="purple.600"
          onClick={() => DeleteButtonhandler(movieId, episodeId)}
        />
      </Button>
    </Stack>
  );
}
