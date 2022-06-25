import { Button, Flex } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react'

interface Props{
    itemsPerPage: number
    totalItems: number
    setPageNumber: Dispatch<SetStateAction<number>>
    pageNumber: number
}

const Pagination:React.FC<Props> = (props) => {
    const {itemsPerPage , totalItems , setPageNumber , pageNumber} = props;
    const noOfPages:number = Math.ceil(totalItems/itemsPerPage);

    const pageNumbers:number[]=[];

    for(let i:number=1;i<=noOfPages;i++){
        pageNumbers.push(i);
    }

  return (
    <div>
        <Flex alignItems={"center"} justifyContent="center" height={"10vh"}>
            {pageNumbers.map((page) => (
                <Button disabled={page===pageNumber} colorScheme='orange' key={page} ml={3} onClick={()=> setPageNumber(page)}>{page}</Button>
            ))}
        </Flex>
    </div>
  )
}

export default Pagination