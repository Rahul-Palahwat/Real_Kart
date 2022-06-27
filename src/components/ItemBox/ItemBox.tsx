import { Flex, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Item } from '../Item/Item'
import '../ItemBox/style.css'



import data from '../data.json'
import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'


interface Props{
  search: string
}

const ItemBox: React.FC<Props> = (props) => {

  const { search } = props;


  // for responsiveness  
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 688px)');
  const [isFilter] = useMediaQuery('(min-width: 900px)');

  console.log("screen",{isNotSmallerScreen});
  console.log("screen",{isFilter});


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

  const [searchData , setSearchData] = useState<Data[]>(data);




  useEffect(() => {
    // setNewdata([]);
    // console.log("Hello fil", fil);
    setPageNumber(1);

    // logic to search globally in items 
    // (fil.length === 0 && search!=="" ?

    //    setSearchData(data.filter((da)=> {
    //     Object.values(da).join(" ").toLowerCase().includes(search.toLowerCase())
    //     // console.log("Objects", Object.values(da).join(" ").toLowerCase().includes(search.toLowerCase()))
    //    }))
       
    //    : setNewdata([]));




    // (fil.length === 0 && search==="" ?setNewdata(data) : setNewdata([]));



    (fil.length === 0?setNewdata(data) : setNewdata([]));




      //  console.log("search Data after console",searchData);





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


  }, [fil,search])

  // console.log(newdata.length)

  

  return (
    <div className='itembox' style={{ "alignItems": "center" }}>
      <Flex>
        {isFilter?
          <Filter fil={fil} setFil={setFil} />
        :""}
         
        
        <Flex direction={"column"} width={"100%"}>
          {isNotSmallerScreen?
          <h1 style={{ "fontSize": "1.5rem", "borderBottom": "1px solid grey" }}>Showing Items-{indexOfFirstItem + 1} to {indexOfLastItem > newdata.length ? newdata.length : indexOfLastItem} of {newdata.length} </h1>
          :
          <h1 style={{ "fontSize": "1rem", "borderBottom": "1px solid grey" }}>Showing Items-{indexOfFirstItem + 1} to {indexOfLastItem > newdata.length ? newdata.length : indexOfLastItem} of {newdata.length} </h1>
          }
          

          <Grid templateColumns={isNotSmallerScreen ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'}>
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
          <Flex justifyContent={"center"} alignItems="flex-end">
          <Pagination itemsPerPage={itemsPerPage} totalItems={newdata.length} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
          </Flex>
        </Flex>


      </Flex>
      
    </div>
  )
}

export default ItemBox
