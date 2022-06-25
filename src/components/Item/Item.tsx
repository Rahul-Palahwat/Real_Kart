import {  Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
// import React from 'react'
// import { useDispatch } from 'react-redux';

import {useAppDispatch , useAppSelector} from '../../Redux/app/hooks';

import * as data from '../data.json'


// import addItem from '../../Redux/features/Cart/Cart';
import { addItem } from '../../Redux/features/Cart/Cart';

import { removeItem } from '../../Redux/features/Cart/Cart';

import '../Item/style.css'
import _ from 'lodash';

type Props={
    title:string ,
    image: string[],
    price: number | undefined,
    itemCode: number,
}


export const Item = (props:Props) => {
    const {title , image, price, itemCode} =props;
    const itemcodes =  _.map(data, (el) => {
        return el.itemCode
    })
    // console.log({itemcodes})
    const {items, loading} = useAppSelector((state)=> state.cart)

    const dispatch = useAppDispatch();
    const [buttonId, setButtonId] =  useState(0)
    // console.log({a: items.includes(itemCode), itemCode, items})

  return (
    <div className='total'>
        <div>
        <Flex direction={"column"} alignItems="center" className='add' wrap={"wrap"} height="100%">
            <Flex mt={2}><img src={image[0]} alt="Hello" style={{"height":"20vh","width":"20vh"}}/></Flex>
            <Flex mt={2}>{title}</Flex>
            <Flex>
            <Flex mt={2}>&#x20B9;{price}</Flex>
            <Flex mt={2} ml={4} textDecoration="line-through">&#x20B9;{price}</Flex>
            </Flex>
            <Flex id="cart" width="100%" height={"100%"} alignItems={"flex-start"}>
                {/* <Flex mt={2} mb={2} width="100%" justifyContent={"center"}><Button background={"blue.500"} color="white" width="80%">Add to cart</Button></Flex> */}
                {/* <Flex mt={2} mb={2} width="100%" justifyContent={"center"}><Button background={"blue.500"} color="white" width="80%" onClick={() => {dispatch(addItem({item:itemCode}))}}>Add to cart</Button></Flex> */}
                {/* {items.loading && <div>Loading...</div>}
                {!items.loading ? (
                    <Flex mt={2} mb={2} width="100%" justifyContent={"center"}><Button background={"blue.500"} color="white" width="80%" onClick={() => {dispatch(addItem(itemCode))}}>Add to cart</Button></Flex>
                ):null} */}
                <Flex mt={2} mb={2} width="100%" justifyContent={"center"}>
                    <Button 
                        className='items'
                        isLoading={loading && buttonId === itemCode} 
                        isDisabled={(loading && buttonId !== itemCode)} 
                        // { (items.includes(itemCode)) ? background={"blue.500"} : background={"blue.500"}} 
                        background = {(items.includes(itemCode)) ? "red.400" : "orange.400"}
                        color="white" 
                        width="80%" 
                        onClick={() => {
                            setButtonId(itemCode);
                            { (items.includes(itemCode)) ? dispatch(removeItem(itemCode)) : dispatch(addItem(itemCode))}
                            // dispatch(addItem(itemCode))
                            }} >

                        {items.includes(itemCode) ? `Remove from cart` : `Add to cart`} 
                    </Button>
                </Flex>

            </Flex>
            
            
        </Flex>
        </div>
      
    </div>
  )
}


