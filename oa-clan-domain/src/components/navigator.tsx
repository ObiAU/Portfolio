import React, { useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Button, Text, Spacer, ButtonGroup, Image } from "@chakra-ui/react";

const Navbar = () =>
{
    return (

    <Box px={4}>
        <Flex h='16' alignItems='center' gap='2' justifyContent={'space-between'}>
            <Box>
                <Text fontWeight="bold">Obi's Personal Website</Text>
            
            </Box>
            <Flex alignItems='center'>
                <Spacer/>
                <ButtonGroup gap='2'>
                    <Button as={Link} to = '/' colorScheme="teal" variant='ghost' size='xs'>Home</Button>
                    <Button as={Link} to = '/About' colorScheme="teal" variant='ghost' size='xs'>About</Button>
                    <Button as={Link} to = '/Experience' colorScheme="teal" variant='ghost' size='xs'>Experience</Button>
                    <Button as={Link} to = '/CV' colorScheme="teal" variant='ghost' size='xs'>CV</Button>
                    <Button as={Link} to = '/Projects' colorScheme="teal" variant='ghost' size='xs'>Projects</Button>
                    <Button as={Link} to = '/Contact' colorScheme="teal" variant='ghost' size='xs'>Contact</Button>
                </ButtonGroup>
                <Spacer/>
                <ColorModeSwitcher justifyContent="flex-end"/>
            </Flex>
        </Flex>
    </Box>
    )
}

export default Navbar;
