import { Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import {FaInstagram,FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer:React.FC = () => {
  return (
    <div>
        <Flex h={"12vh"} backgroundColor="grey" direction={"column"} >
            <Flex justifyContent={"center"} height="60%" mt="2" alignItems={"center"}>
                <Flex width={"8%"}>Follow Us :</Flex>
            <IconButton icon={<FaGithub/>} aria-label={'sd'} mr="3"/>
            <IconButton icon={<FaLinkedin/>} aria-label={'sd'} mr="3"/>
            <IconButton icon={<FaInstagram/>} aria-label={'sd'}/>
            </Flex>
            <hr />
            <Flex justifyContent={"center"} backgroundColor="black">All Rights Reserved &copy;Pensive2022</Flex>
        </Flex>
      
    </div>
  )
}

export default Footer
