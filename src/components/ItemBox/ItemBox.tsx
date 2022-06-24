import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import {Item} from '../Item/Item'
import '../ItemBox/style.css'



import data from '../data.json'

const ItemBox:React.FC = () => {
  
  return (
    <div className='itembox' style={{"alignItems":"center"}}>
      
      <Grid templateColumns='repeat(4, 1fr)'>
        {data.map((item) => 
        <GridItem w='95%' h='auto' bg='pink.50' color={"black"} m={2} borderRadius={"5"} key={item.itemCode}><Item title={item.title} image={item.imgLink} price={!item.newprice?item.newprice:item.newprice} itemCode={item.itemCode}/></GridItem>
        )}

      </Grid>

      
      
    </div>
  )
}

export default ItemBox
