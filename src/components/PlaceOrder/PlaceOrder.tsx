import { Flex, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const PlaceOrder: React.FC = () => {
    return (
        <div>
            <Flex direction={"column"} alignItems="center">

                <Flex height={"10vh"} width={"100vw"} alignItems={"center"} justifyContent="center" fontSize={"4xl"}><Flex fontSize={"4xl"}>❝&nbsp;</Flex><Flex fontWeight={"bold"}>Order Summary</Flex> </Flex>


                <Flex height={"100vh"} width={"90vw"} borderTop="2px solid white" direction={'column'}>

                    <Flex height={"70vh"} border="1px solid green">

                        <Flex width={"60vw"} border="1px solid aqua" justifyContent={"center"}>
                            <Flex width={"60vw"} direction="column" alignItems={"center"}>
                                <Flex fontSize={"2xl"}>Shipping and Billing address</Flex>
                            <Flex width={"80%"} borderTop="1px solid blue">
                            <FormControl>
                                {/* <FormLabel htmlFor='email'>Name</FormLabel> */}
                                <Flex justifyContent={"space-between"}>
                                <Input id='name' type='name' placeholder='Enter Name' width={"45%"}/>
                                <Input id='name' type='name' placeholder='Enter Name' width={"45%"}/>
                                </Flex>
                                
                            </FormControl>
                            </Flex>
                            </Flex>

                        </Flex>


                        <Flex width={"30vw"} border="1px solid orange">
                            <Flex width={"30vw"} height={"auto"} border="1px solid green" direction={"column"} wrap="wrap">
                                <Flex height={"5vh"} fontSize="xl" ml="2" mt="2" borderBottom={"0.5px solid grey"} justifyContent="center">Price Details</Flex>

                                <Flex ml="2" mt="4" justifyContent={"space-between"}>
                                    <Flex direction={"column"}>
                                        <Flex fontSize="2xl">Total Price</Flex>
                                        <Flex fontSize={"1xl"} justifyContent="center">2 items</Flex>
                                    </Flex>
                                    <Flex fontSize="2xl">sum</Flex>
                                </Flex>

                                <Flex ml="2" mt="4" justifyContent={"space-between"} fontSize="2xl">
                                    <Flex>Discount</Flex>
                                    <Flex color={"green.400"}>1000</Flex>
                                </Flex>

                                <Flex ml="2" mt="4" justifyContent={"space-between"} fontSize="2xl">
                                    <Flex>Delivery Charge</Flex>
                                    <Flex color={"green.400"}>FREE</Flex>
                                </Flex>

                                <Flex ml="2" mt="5" borderBottom={"2px solid grey"}></Flex>

                                <Flex ml="2" mt="4" justifyContent={"space-between"} fontSize="2xl">
                                    <Flex>Total Amount</Flex>
                                    <Flex>1000</Flex>
                                </Flex>

                                <Flex ml="2" mt="5" borderBottom={"2px solid grey"}></Flex>


                            </Flex>

                        </Flex>
                    </Flex>


                    <Flex height={"30vh"} border="1px solid blue">Payment

                    </Flex>






                    <Flex height={"10vh"} width={"90vw"} border="1px solid red" alignItems={"center"} justifyContent={"flex-end"}>
                        <Flex justifyContent={"center"} mr={2}>
                            <Button backgroundColor={"orange.400"} width={"30vh"} height="12" fontSize={"2xl"}>Place order</Button>
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
        </div>
    )
}

export default PlaceOrder
