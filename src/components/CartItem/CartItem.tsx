import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

import {useAppDispatch , useAppSelector} from '../../Redux/app/hooks';

import { removeItem } from '../../Redux/features/Cart/Cart';

import _ from 'lodash';

type Props={
    image: string[],
    title: string,
    desc: object,
    price: number,
    itemCode: number
}

const CartItem:React.FC <Props> = (props) => {

  const dispatch = useAppDispatch();

  const description: string[] = [];
  
    const {image, title, desc, price, itemCode} = props;
  return (
    <div>
      <Flex wrap={"wrap"} mt={3} mb={2} width={"58vw"} height={"auto"} border="1px solid grey" alignItems={"center"}>

        <Flex width={"25vh"} height={"25vh"}>
            <img src={image[0]} alt="Image" style={{"height":"25vh","width":"25vh"}}/>
        </Flex>

        <Flex ml="3" width={"60vh"} height={"auto"} direction={"column"}>
            <Flex fontSize={"xl"} height={"auto"} mt="2" borderBottom="1px solid pink" wrap={"wrap"}>{title}</Flex>
            <Flex height={"auto"} mt="2" borderBottom="1px solid pink" wrap={"wrap"}>
              { _.map(desc, (key, value) => {
                description.push(key)
                 return <></>
              })}
              {description.map((value) => <Flex>{value}</Flex>)}
            </Flex>
            <Flex>
            <Flex mt={2} fontSize={"xl"}>&#x20B9;{price}</Flex>
            <Flex mt={3} ml={4} textDecoration="line-through">&#x20B9;{price}</Flex>
            </Flex>
        </Flex>

        <Flex direction={"column"} alignItems="flex-end">
            <Flex mt={"auto"} ml="10">
            <Button backgroundColor={"red.500"} width={"150px"} fontSize={"1xl"} onClick={()=>{dispatch(removeItem(itemCode))}}>Remove</Button>
            </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default CartItem
