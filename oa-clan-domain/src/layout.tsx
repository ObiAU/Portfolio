import React, { useState, useEffect } from "react";
import Navbar from './components/navigator';
import { ChakraProvider, theme, Spacer, Box, Flex, useColorModeValue, Image } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomeTab';
import Ldomain from './components/Ldomain';
import { About, Contact } from "./components/AboutTab";
import Exp from "./components/ExpTab";
import ResumeView from "./components/ResumeView";
import SkillSet from "./components/SkillTab";
import oaclanlogoMod from './oaclanlogoMod.svg';
import oaclanlogo from "../oaclanlogo.svg";

const Layout: React.FC = () => {

  const bgColor = useColorModeValue('white', 'black');
  const quarterBgColor = useColorModeValue('gray.300', 'teal.700');
    return (
        <Router>
            <Flex direction="column" minHeight="100vh"> 
            <Image position='absolute' src={oaclanlogoMod} opacity={0.05} pb={0} boxSize="1150px"
            left="50%"
            top="45%"
            transform="translate(-50%, -55%)" 
            ></Image>
            {/* <Image position='absolute' src={oaclanlogo} opacity={0.1} ></Image> */}
            <Box
                position="absolute"
                top={0} right={0} width="18%" height="53.5vh" 
                bg={quarterBgColor}
                zIndex={-1}
                >
                </Box>
                <Navbar />
                <Box textAlign="center" pt={10} pb={10} flex="1"> 
                
                  <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='About' element={<About />}/>
                    <Route path='Experience' element={<Exp />}/>
                    <Route path='CV' element={<ResumeView />}/>
                    <Route path='Projects' element={<SkillSet />}/>
                    <Route path='Contact' element={<Contact />}/>
                  </Routes>
                    
                </Box>
                {/* <Spacer/> */}
                <Ldomain /> 
            </Flex>
        </Router>
    );
};

export default Layout;