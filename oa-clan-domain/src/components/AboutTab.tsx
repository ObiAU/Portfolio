import { Box, Flex, Text, IconButton, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { MediaLink, MediaLinks } from "./Ldomain";

export const About: React.FC = () => {
    return(
    <Box></Box>)
};

export const Contact: React.FC = () => {
    return (
        <Flex direction="column"  justifyContent="center" 
        minHeight="50vh"
        >
            <Text fontSize="2x1" alignItems="center" fontWeight="bold" mt="4">Contact Details:</Text>
            <Spacer/>
            {MediaLinks.map((link, index) => (
                <Flex key={index} direction="row" justifyContent="center">
                <Text fontSize="2x1">{link.ariaLabel}</Text>
                {/* <Spacer/> */}
                <IconButton as="a" href={link.href} aria-label={link.ariaLabel} icon={<link.icon/>}/>
                </Flex>
            ))}
            {/* <Text mt="2" maxWidth="container.md" textAlign="center">
              Email: Obszeto@gmail.com
            </Text> */}

        </Flex>
    );

};