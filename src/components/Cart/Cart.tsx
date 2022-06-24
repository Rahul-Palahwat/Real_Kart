import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import CartItem from '../CartItem/CartItem'

import totalitems from '../data.json'


import {useAppSelector} from '../../Redux/app/hooks';
import { useNavigate } from 'react-router-dom';



// import _ from 'lodash';

const Cart:React.FC= () => {

  const {items,sum} = useAppSelector((state)=> state.cart);

  const navigate = useNavigate();



  // const dispatch = useAppDispatch();

  return (
    <div>
      <Flex direction={"column"}>
        <Flex justifyContent={"center"}>
        <Flex justifyContent={"center"}
        alignItems={"flex-end"} height={"10vh"} width={"90vw"} fontSize="2xl" fontFamily={"cursive"} fontWeight="extrabold" borderBottom={"3px solid white"}>
          <Flex mb={3} ml={10}>Shopping Bag</Flex>
        </Flex>
        </Flex>



        <Flex justifyContent={"center"}>
          <Flex justifyContent={"space-between"}>


          {items.length>0?
          <Flex width={"60vw"} height={items.length>=3?'auto':'100vh'} direction={"column"}>

            <Flex height={"5vh"} fontSize="xl" ml="2" mt="2" borderBottom={"0.5px solid grey"}>Items-{items.length}</Flex>
            
            
            <Flex wrap={"wrap"} ml="2" mt="2" direction={"column"}>
              { totalitems.map(item => ( 
                (items.includes(item.itemCode)?
                <CartItem image={item.imgLink} title={item.title} desc={item.description} price={item.newprice} itemCode={item.itemCode}/>
                :null)
                
                // <CartItem image={item.imgLink} title={item.title} desc={item.description} price={item.newprice}/>
              )) }
            </Flex>


          </Flex>
          :<Flex fontSize={"3xl"} justifyContent={"center"} width={"60vw"} height={items.length>=2?'auto':'80vh'} direction={"column"}>Cart Is Empty</Flex>}





          <Flex width={"30vw"} height={"auto"} direction={"column"} wrap="wrap">
            <Flex height={"5vh"} fontSize="xl" ml="2" mt="2" borderBottom={"0.5px solid grey"} justifyContent="center">Price Details</Flex>

            <Flex ml="2" mt="4" justifyContent={"space-between"}>
              <Flex direction={"column"}>
                <Flex fontSize="2xl">Total Price</Flex>
                <Flex fontSize={"1xl"} justifyContent="center">({items.length} Items)</Flex>
              </Flex>
              <Flex fontSize="2xl">{sum}</Flex>
            </Flex>

            <Flex ml="2" mt="4" justifyContent={"space-between"} fontSize="2xl">
              <Flex>Discount</Flex>
              <Flex color={"green.400"}>{sum>1000?1000:0}</Flex>
            </Flex>

            <Flex ml="2" mt="4" justifyContent={"space-between"} fontSize="2xl">
              <Flex>Delivery Charge</Flex>
              <Flex color={"green.400"}>FREE</Flex>
            </Flex>

            <Flex ml="2" mt="5" borderBottom={"2px solid grey"}></Flex>

            <Flex ml="2" mt="4" justifyContent={"space-between"} fontSize="2xl">
              <Flex>Total Amount</Flex>
              <Flex>{sum-1000>0?sum-1000:sum}</Flex>
            </Flex>
            
            <Flex ml="2" mt="5" borderBottom={"2px solid grey"}></Flex>

            <Flex ml="2" mt="8" justifyContent={"center"}>
              <Button backgroundColor={"orange.400"} width={"80%"} height="12" fontSize={"2xl"} onClick={() => {items.length>0?navigate('/checkout'):navigate('/')}}>{items.length>0?'CheckOut':'Add Item'}</Button>
            </Flex>
            
          </Flex>

        </Flex>

        </Flex>


      </Flex>
    </div>
  )
}

export default Cart
