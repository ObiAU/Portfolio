import * as React from "react";
// import hshot from '../hshot.svg'; // use .. to go up a level
// import hshotMod from '../hshotMod.svg';
import hshotMod from '../hshotMod.png';
import {
    Box,
    Flex,
    Text,
    Spacer,
    Image,
    Link,
    HStack,
    VStack,
    Center,
    Container,
    Heading,
    useColorModeValue
  } from '@chakra-ui/react';


const Home: React.FC = () => {

    const boxColor = useColorModeValue("teal.400", "gray.600");

    return (
        
        < Center position='relative' flex="1" pl={4} pr={0.5} pt={20} pb={2}>
        <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center" 
        // bg={boxColor}
        // minHeight="100vh" 
        // overflow="auto"
        >
            <VStack align='center' spacing={4} >
            <Text fontSize="5xl" alignContent='center' fontWeight="bold" mt="4">Obiefuna Anthony-Uzoeto</Text>
            <Text as='cite' fontSize="3xl">
                {/* My name is Obi and I am a  */}
                <Text as="span" color="orange"> Data Scientist</Text> and Software 
                <Text as="span" color="grey"> Developer.</Text>
                {/* This is my digital domain, where I write about my experiences and share the things I have learnt. */}
                </Text>
            <Text as='cite' fontSize="3xl" maxWidth="container.md" color="teal">
                Welcome to my personal domain! 
            </Text>
    
            </VStack>
        </Flex>
        <Spacer/>
        <Image src={hshotMod} boxSize="290px" 
            // borderRadius="full" 
            alt="Profile Picture"/>

        </Center>

      
    );
};


export default Home;
