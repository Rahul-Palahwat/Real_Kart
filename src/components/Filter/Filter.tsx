import { Checkbox, Flex } from '@chakra-ui/react'
import React from 'react'
import '../Filter/style.css'
const Filter:React.FC = () => {
  return (
    <div className="filter" >

      <Flex direction={"column"} height={"100vh"}>
      <Flex width={"20vw"} height={"33vh"} className="filter" direction={"column"}>
        <Flex height={"20%"} alignItems="center" ml="3" fontSize={"medium"} fontWeight="bold">
          ITEMS
        </Flex>
        <Flex height={"80%"} border={"1px blue solid"} ml="3" direction={"column"}>
          <Flex height={"20%"}><Checkbox>Home Essentials</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Soaps & Detergents</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Grooming</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Beverages</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Dry Fruits</Checkbox></Flex>
        </Flex>
      </Flex>

      <Flex width={"20vw"} height={"33vh"} className="filter" direction={"column"}>
        <Flex height={"20%"} alignItems="center" ml="3" fontSize={"medium"} fontWeight="bold">
          DISCOUNT RANGE
        </Flex>
        <Flex height={"80%"} border={"1px blue solid"} ml="3" direction={"column"}>
          <Flex height={"25%"}><Checkbox>5% & above</Checkbox></Flex>
          <Flex height={"25%"}><Checkbox>10% & above</Checkbox></Flex>
          <Flex height={"25%"}><Checkbox>25% & above</Checkbox></Flex>
          <Flex height={"25%"}><Checkbox>50% & above</Checkbox></Flex>
        </Flex>
      </Flex>

      <Flex width={"20vw"} height={"auto"} className="filter" direction={"column"}>
        <Flex height={"20%"} alignItems="center" ml="3" fontSize={"medium"} fontWeight="bold">
          ITEMS
        </Flex>
        <Flex height={"80%"} border={"1px blue solid"} ml="3" direction={"column"}>
          <Flex height={"20%"}><Checkbox>Home Essentials</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Soaps & Detergents</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Grooming</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Beverages</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Dry Fruits</Checkbox></Flex>
        </Flex>
      </Flex>


      </Flex>

     
      
    </div>
  )
}

export default Filter
