import { Checkbox, Flex, RadioGroup } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'
import '../Filter/style.css'

type Props={
  fil: number[]
  setFil: Dispatch<SetStateAction<number[]>>
}

const Filter: React.FC <Props>= (props) => {
  let {fil , setFil} = props;
  return (
    <div className="filter" >

      <Flex direction={"column"} height={"100vh"}>
        <Flex width={"20vw"} height={"33vh"} className="filter" direction={"column"}>
          <Flex height={"20%"} alignItems="center" ml="3" fontSize={"medium"} fontWeight="bold">
            ITEMS
          </Flex>
          {/* <Flex height={"80%"} border={"1px blue solid"} ml="3" direction={"column"}>
          <Flex height={"20%"}><Checkbox>Home Essentials</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Soaps & Detergents</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Grooming</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Beverages</Checkbox></Flex>
          <Flex height={"20%"}><Checkbox>Dry Fruits</Checkbox></Flex>
        </Flex> */}
          <RadioGroup>
            <Flex direction={"column"} ml={3}>

              <Checkbox value='1' mb={5} > <p onClick={() => {fil.includes(1)?setFil(fil.filter((item)=> item!=1)):(setFil([...fil,1]))}}>Electronic Items</p> </Checkbox>
              <Checkbox value='2' mb={5} > <p onClick={() => {fil.includes(2)?setFil(fil.filter((item)=> item!=2)):(setFil([...fil,2]))}}>Vehicles</p> </Checkbox>
              <Checkbox value='3' mb={5} > <p onClick={() => {fil.includes(3)?setFil(fil.filter((item)=> item!=3)):(setFil([...fil,3]))}}>Home Accessories</p> </Checkbox>
              <Checkbox value='4' mb={5} > <p onClick={() => {fil.includes(4)?setFil(fil.filter((item)=> item!=4)):(setFil([...fil,4]))}}>General Fitness</p> </Checkbox>

            </Flex>
          </RadioGroup>
        </Flex>

        <Flex width={"20vw"} height={"33vh"} className="filter" direction={"column"}>
          <Flex height={"20%"} alignItems="center" ml="3" fontSize={"medium"} fontWeight="bold">
            DISCOUNT RANGE
          </Flex>
          {/* <Flex height={"80%"} border={"1px blue solid"} ml="3" direction={"column"}>
            <Flex height={"25%"}><Checkbox>5% & above</Checkbox></Flex>
            <Flex height={"25%"}><Checkbox>10% & above</Checkbox></Flex>
            <Flex height={"25%"}><Checkbox>25% & above</Checkbox></Flex>
            <Flex height={"25%"}><Checkbox>50% & above</Checkbox></Flex>
          </Flex> */}
          <RadioGroup>
            <Flex direction={"column"} ml={3}>
              <Checkbox value='1' mb={5} >5% & above</Checkbox>
              <Checkbox value='2' mb={5}>10% & above</Checkbox>
              <Checkbox value='3' mb={5}>25% & above</Checkbox>
              <Checkbox value='4' mb={5}>50% & above</Checkbox>
            </Flex>
          </RadioGroup>
        </Flex>

        


      </Flex>



    </div>
  )
}

export default Filter
