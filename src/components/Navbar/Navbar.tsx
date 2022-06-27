import { Badge, Flex, IconButton, useMediaQuery } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'
import {BsCartPlusFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'

import '../Navbar/style.css'
import { useNavigate } from 'react-router-dom'



import { useAppSelector } from '../../Redux/app/hooks'

interface Props{
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}


const Navbar:React.FC<Props>= ( props ) => {

  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');

  const {search , setSearch} = props;

  const {items} = useAppSelector((state) => state.cart)

  const noOfItems:number = items.length


  let navigate= useNavigate();
  return (
    <div>
      <Flex justifyContent={'space-between'} h="10vh" borderBottom={"1px solid grey"} alignItems={'center'}>
        <Flex ml={isNotSmallerScreen?"8":"2"}  fontWeight={"extrabold"} fontSize={isNotSmallerScreen?"1.5rem":"1rem"} onClick={()=>navigate('/')} cursor="pointer">Pensive-Kart</Flex>
        <Flex>


          <input type="text" placeholder='Search here' style={{"padding":"10px"}} defaultValue='dsfdsf' value={search} onChange={(e)=> setSearch(e.target.value)} />


          <IconButton icon={<BiSearchAlt2 />} aria-label={'sd'} ml={"-10"}/>
        </Flex>
        <Flex mr={isNotSmallerScreen?"8":"4"} >
          <IconButton icon={<CgProfile/>} onClick={()=>navigate('/profile')} aria-label={' '} mr={isNotSmallerScreen? "8" : "2"}/>
          <Flex>
          <IconButton icon={<BsCartPlusFill />} aria-label={'aaa'} onClick={()=>navigate('/cart')}/>
          <Badge colorScheme='red' backgroundColor={"red.500"} borderRadius="5px 5px 20px 20px" height={"5"} width="5" ml="-7" mt={-1}>{noOfItems}</Badge>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Navbar
