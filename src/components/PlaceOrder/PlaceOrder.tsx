import { Flex, Button, FormControl, FormLabel, Input, Textarea, RadioGroup, Stack, Radio, Select, Grid } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useAppSelector , useAppDispatch} from '../../Redux/app/hooks'

import { orderItem } from '../../Redux/features/Cart/Cart';

const PlaceOrder: React.FC = () => {

    const dispatch = useAppDispatch();

    const { items, sum } = useAppSelector((state) => state.cart);

    const navigate = useNavigate();

    const orderDone=()=>{
        window.alert("Order successfully placed!");
        dispatch(orderItem());
        navigate('/');

    }

    return (
        <div>
            <Flex direction={"column"} alignItems="center">

                <Flex height={"10vh"} width={"100vw"} alignItems={"center"} justifyContent="center" fontSize={"4xl"}><Flex fontSize={"4xl"}>❝&nbsp;</Flex><Flex fontWeight={"bold"}>Order Summary</Flex> </Flex>


                <Flex height={"105vh"} width={"90vw"} direction={'column'}>

                    <Flex height={"70vh"} >

                        <Flex width={"60vw"} justifyContent={"center"} >
                            <Flex width={"60vw"} direction="column" alignItems={"center"} >
                                <Flex fontSize={"2xl"}>Shipping and Billing address</Flex>
                                <Flex width={"80%"} borderTop="1px solid grey" pb={4}>
                                    <FormControl>
                                        {/* <FormLabel htmlFor='email'>Name</FormLabel> */}
                                        <Flex justifyContent={"space-between"} mt={4}>
                                            <Input id='name' type='name' placeholder='Enter Name' width={"45%"} />
                                            <Input id='phone' type='number' placeholder='Enter Mobile Number' width={"45%"} />
                                        </Flex>
                                        <Textarea id='address' placeholder='Address' mt={4} />
                                        <Flex justifyContent={"space-between"} mt={4}>
                                            <Input id='city' type='name' placeholder='City' width={"45%"} />
                                            <Input id='state' type='name' placeholder='State' width={"45%"} />
                                        </Flex>
                                        <Flex justifyContent={"space-between"} mt={4} borderBottom={"1px solid grey"} pb={5}>
                                            <Input id='pin' type='number' placeholder='Pin' width={"45%"} />
                                            {/* <Input id='country' type='name' placeholder='Country' width={"45%"} /> */}
                                            <Select id='country' placeholder='Select country' width={"45%"}>
                                                <option>India</option>
                                                <option>Indonesia</option>
                                            </Select>
                                        </Flex >
                                        <RadioGroup mt={4} borderBottom="1px solid grey" pb={5}>
                                            <FormLabel htmlFor='radio'>Address Type</FormLabel>
                                            <Flex justifyContent={"space-between"}>
                                                <Radio colorScheme='green' value='1' id="radio">
                                                    Home (AnyTime Delivery)
                                                </Radio>
                                                <Radio colorScheme='red' value='2' id="radio">
                                                    Office (Delivery between 10AM - 5PM)
                                                </Radio>
                                            </Flex>
                                        </RadioGroup>


                                    </FormControl>

                                </Flex>
                            </Flex>

                        </Flex>


                        <Flex width={"30vw"} borderRadius={5}>
                            <Flex width={"30vw"} height={"auto"} direction={"column"} wrap="wrap">
                                <Flex height={"5vh"} fontSize="xl" ml="2" mt="2" borderBottom={"0.5px solid grey"} justifyContent="center">Price Details</Flex>

                                <Flex ml="2" mt="4" justifyContent={"space-between"}>
                                    <Flex direction={"column"}>
                                        <Flex fontSize="2xl">Total Price</Flex>
                                        <Flex fontSize={"1xl"} justifyContent="center">{items.length} Items</Flex>
                                    </Flex>
                                    <Flex fontSize="2xl">{sum}</Flex>
                                </Flex>

                                <Flex ml="2" mt="4" justifyContent={"space-between"} fontSize="2xl">
                                    <Flex>Discount</Flex>
                                    <Flex color={"green.400"}>-{sum > 1000 ? 1000 : 0}</Flex>
                                </Flex>

                                <Flex ml="2" mt="4" justifyContent={"space-between"} fontSize="2xl">
                                    <Flex>Delivery Charge</Flex>
                                    <Flex color={"green.400"}>FREE</Flex>
                                </Flex>

                                <Flex ml="2" mt="5" borderBottom={"2px solid grey"}></Flex>

                                <Flex ml="2" mt="4" justifyContent={"space-between"} fontSize="2xl">
                                    <Flex>Total Amount</Flex>
                                    <Flex>{sum - 1000 > 0 ? sum - 1000 : sum}</Flex>
                                </Flex>

                                <Flex ml="2" mt="5" borderBottom={"2px solid grey"}></Flex>


                            </Flex>

                        </Flex>
                    </Flex>


                    <Flex height={"33vh"} justifyContent={"center"}>

                        <Flex width={"87%"} direction={"column"} pb={3}>

                            <Flex height={"4vh"} alignItems='center' fontWeight={"extrabold"} pb={5}>Payment Options:</Flex>


                            <Flex mt={2}>
                                <RadioGroup>
                                    <Grid templateColumns={"repeat(2,1fr)"}>
                                        <Radio value='1' mb={5} width={"27vw"}>BHIM UPI</Radio>
                                        <Radio value='2' mb={5}>Wallets</Radio>
                                        <Radio value='3' mb={5}>Credit/Debit/ATM Card</Radio>
                                        <Radio value='4' mb={5}>Net Banking</Radio>
                                        <Radio value='5' mb={5}>EMI</Radio>
                                        <Radio value='6' mb={5}>Cash On Delivery</Radio>
                                    </Grid>
                                </RadioGroup>
                            </Flex>



                        </Flex>

                    </Flex>






                    <Flex height={"10vh"} width={"90vw"} alignItems={"center"} justifyContent={"flex-end"} >
                        <Flex justifyContent={"center"} mr={2}>
                            <Button backgroundColor={"orange.400"} width={"30vh"} height="12" fontSize={"2xl"} mb={2} onClick={()=>orderDone()}>Place order</Button>
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
        </div>
    )
}

export default PlaceOrder
