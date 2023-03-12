import {
  Drawer,
  useDisclosure,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Box,
} from '@chakra-ui/react';
import React from 'react';

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box
      display={'flex'}
      justifyContent={'right'}
      w="100%"
      h="100%"
      bgGradient="linear(to-r, green.200, pink.500)"
    >
      <Button m={2} ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Test 1</DrawerHeader>
          <DrawerBody>
            <Input placeholder="Test your..." />
          </DrawerBody>
          <DrawerFooter>
            <Button variant={'outline'} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme={'blue'}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Home;
