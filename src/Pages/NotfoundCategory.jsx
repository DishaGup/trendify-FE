import React, { useEffect } from "react";
import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getProductsSubSubcategory } from "../Redux/ProductReducer/action";
const NotfoundCategory = () => {
  const {category}=useParams()
  const toast=useToast()
  let dispatch = useDispatch();

  const handleGoBack = () => {
   dispatch(getProductsSubSubcategory(category))
  };

useEffect(()=>{

  toast({
    title: "Try Other Category",
    description: "we have limited data into our database!",
    status: "info",
    duration: 4000,
    isClosable: true,
    position: "top",
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])




  return (
    <Box textAlign="center">
      <Image
        src={
          "https://elements-cover-images-0.imgix.net/41ce1856-ce64-47eb-9cc9-d50c75ba936b?auto=compress%2Cformat&fit=max&w=900&s=501aef4930c224609ff884797e50331d"
        }
        alt="Product Not Available"
        mb="20px"
        maxWidth="150%"
        mx="auto"
      />
      <Text fontSize="xl" mb="20px" fontWeight="bold">
        Sorry, this Product is currently not available
      </Text>
      <Box>
        <Button onClick={handleGoBack} mt="20px" size="lg">
          Shop More
        </Button>
      </Box>
    </Box>
  );
};

export default NotfoundCategory;
