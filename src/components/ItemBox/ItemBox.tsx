import { Grid, GridItem } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {Item} from '../Item/Item'
import '../ItemBox/style.css'



import data from '../data.json'

const ItemBox:React.FC = () => {

  interface Data{
    itemCode: number
    category?: string
    imgLink: string[]
    title: string
    location?: string
    owner?: string
    used?: string
    newprice?: number
    description?: any
  }
  

  // let newdata:Data[]=[];
  const [newdata, setNewdata] = useState<Data[]>([])
  console.log('newdata',newdata)
  
  // const [flag , setFlag] = useState(true);

  useEffect(() =>{
    setNewdata([])
    data.map(da => (
      ((da.category === 'mobiles' || da.category === 'Camera' || da.category === 'laptop' || da.category === 'Appliances')?setNewdata((newdata) => [...newdata, da]):console.log({da}))
    ));
    // setFlag(false);
  },[])

  

  
  
  return (
    <div className='itembox' style={{"alignItems":"center"}}>
      <h1 style={{"fontSize":"2rem","borderBottom":"1px solid grey"}}>Total Items - {newdata.length}</h1>
      
      <Grid templateColumns='repeat(4, 1fr)'>
        { newdata.map( newdat => 
        <GridItem 
        w='95%' h='auto' bg='pink.50' 
        color={"black"} m={2} 
        borderRadius={"5"} 
        key={newdat.itemCode}>
          <Item title={newdat.title} 
          image={newdat.imgLink} 
          price={!newdat.newprice?newdat.newprice:newdat.newprice} 
          itemCode={newdat.itemCode}/>
          </GridItem>
  
        )}

      </Grid>

      
      
    </div>
  )
}

export default ItemBox
