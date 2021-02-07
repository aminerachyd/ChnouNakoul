import {
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CircleIcon from "../../../CircleIcon";

interface MenuLeftProps {}

const MenuLeft: React.FC<MenuLeftProps> = (props) => {
  return (
    <Box
      mt="5"
      mr="10"
      d="flex"
      flexDir="column"
      alignItems="start"
      justifyContent="space-around"
    >
      <Heading color="primary-dark">Lmenu</Heading>
      <Divider borderColor="primary-dark" orientation="horizontal" />
      <List>
        <ListItem my="3">
          <HStack>
            <CircleIcon boxSize={2} color="primary-dark" />
            <Link color="primary-dark">
              <Text fontSize="lg" fontWeight="bold">
                7ett chno 3ndk fl frigo
              </Text>
            </Link>
          </HStack>
        </ListItem>
        <ListItem my="3">
          <HStack>
            <CircleIcon boxSize={2} color="primary-dark" />
            <Link color="primary-dark">
              <Text fontSize="lg" fontWeight="bold">
                Aji tchof recipes li kaynin
              </Text>
            </Link>
          </HStack>
        </ListItem>
        <ListItem my="3">
          <HStack>
            <CircleIcon boxSize={2} color="primary-dark" />
            <Link color="primary-dark">
              <Text fontSize="lg" fontWeight="bold">
                Mafik li ytyeb ?
              </Text>
            </Link>
          </HStack>
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuLeft;
