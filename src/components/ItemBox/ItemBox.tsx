import { Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Item } from '../Item/Item'
import '../ItemBox/style.css'



import data from '../data.json'
import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'

const ItemBox: React.FC = () => {


  interface Data {
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
  // console.log('newdata',newdata)


  const [fil, setFil] = useState<number[]>([]);



  // Now pagination 
  const [itemsPerPage, setItemsperPage] = useState<number>(12);

  // const [currentPage , setCurrentPage] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const indexOfLastItem: number = pageNumber * itemsPerPage;

  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;

  const pageData: Data[] = newdata.slice(indexOfFirstItem, indexOfLastItem);

  console.log("page", pageData.length);



  useEffect(() => {
    // setNewdata([]);
    console.log("Hello fil", fil);
    setPageNumber(1);
    (fil.length === 0 ? setNewdata(data) : setNewdata([]))
    fil.map((item) => (
      console.log(item),

      (item === 1 ?

        data.map(da => (
          ((da.category === 'Electronic') ? setNewdata((newdata) => [...newdata, da]) : console.log({ da }))
        ))

        : console.log("Electronics")),

      (item === 2 ?

        data.map(da => (
          ((da.category === 'Vehicles') ? setNewdata((newdata) => [...newdata, da]) : console.log({ da }))
        ))

        : console.log("Vechicles")),

      (item === 3 ?

        data.map(da => (
          ((da.category === 'Home') ? setNewdata((newdata) => [...newdata, da]) : console.log({ da }))
        ))

        : console.log("Home")),


      (item === 4 ?

        data.map(da => (
          ((da.category === 'General') ? setNewdata((newdata) => [...newdata, da]) : console.log({ da }))
        ))

        : console.log("General"))




    ))
    // console.log(newdata.length)
    // setNewdata(newdata.slice(indexOfFirstItem,indexOfLastItem))
    // console.log(indexOfFirstItem, indexOfLastItem, newdata.length)

  }, [fil,pageNumber])

  console.log(newdata.length)



  return (
    <div className='itembox' style={{ "alignItems": "center" }}>
      <Flex>
        <Filter fil={fil} setFil={setFil} />
        <Flex direction={"column"} width={"100%"}>
          <h1 style={{ "fontSize": "2rem", "borderBottom": "1px solid grey" }}>Total Items-{newdata.length} :{indexOfFirstItem + 1} to {indexOfLastItem > newdata.length ? newdata.length : indexOfLastItem}  </h1>

          <Grid templateColumns='repeat(4, 1fr)'>
            {pageData.map(newdat =>
              <GridItem
                w='95%' h='auto' bg='pink.50'
                color={"black"} m={2}
                borderRadius={"5"}
                key={newdat.itemCode}>
                <Item title={newdat.title}
                  image={newdat.imgLink}
                  price={!newdat.newprice ? newdat.newprice : newdat.newprice}
                  itemCode={newdat.itemCode} />
              </GridItem>

            )}

          </Grid>
        </Flex>


      </Flex>
      <Pagination itemsPerPage={itemsPerPage} totalItems={newdata.length} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
    </div>
  )
}

export default ItemBox
