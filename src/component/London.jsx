import React,{useState} from 'react'
import {
 
  Box,
  Button,
  ButtonGroup,
  Card,
  Heading,
  Image,
  Stack,
  Text,
  CardFooter,
} from '@chakra-ui/react';
import { CheckCircleIcon, SunIcon } from '@chakra-ui/icons'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillPeopleFill, BsSpeedometer } from "react-icons/bs"
import L_Data from '../All_Json_data/L_Data.json'
const London = () => {

  const [visibleCards, setVisibleCards] = useState(6);
  const totalCards = L_Data.length;

  const showMoreCards = () => {
    setVisibleCards((prev) => prev + 6);
  };
  return (
   <>
    <Box display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} backgroundColor={"#b3cee5"}  boxShadow="lg">
        {L_Data.slice(0, visibleCards).map((d, i) => (
          <Card
            margin={'2rem'}
            width={'20%'}
            height={'15rem'}
            border={'2px solid none'}
            padding={'30px'}
            borderRadius={'1rem'}
            backgroundColor={'#e6e6fa'}
            key={d.id}
          >
         
         <div class="image-container">
                 <Image
              src={d.image}
              alt={d.address}
              borderRadius="1rem"
              alignSelf={'center'}
              width={'80%'}
              height={'7rem'}
            />
             <AiOutlineHeart className='love' style={{ marginTop: '1rem', overflow: 'hidden' }} />
            <h5>For rent</h5>
          </div> 
      
            <Heading>{d.address}</Heading>
            <CardFooter marginTop={'-2rem'} paddingTop={'2rem'}>
              <Stack
                display="flex"
                flexDir={'row'}
                justifyContent="space-between"
                marginTop={'-2rem'}
              >
                <h5>
                  <BsFillPeopleFill /> 3 Room
                </h5>
                <h5>
                  {' '}
                  <BsSpeedometer /> 3 Bed
                </h5>
                <h5>
                  {' '}
                  <CheckCircleIcon /> 1 Bath
                </h5>
                <h5>
                  {' '}
                  <SunIcon /> 732 sft
                </h5>
              </Stack>
            </CardFooter>
            <CardFooter
              display="flex"
              flexDir="row"
              justifyContent="space-between"
              marginTop={'-1.4rem'}
            >
              <Text color="Blue" fontWeight="bold">${d.price}$7255/month-</Text>
              <ButtonGroup>
              <AiOutlineHeart style={{marginTop:"1rem", overflow:"hidden" }} />
                <Button
                  h={30}
                  marginLeft={10}
                  marginTop={10}
                  borderRadius={'1rem'}
                  backgroundColor={'white'}
                  border={'2px solid blue'}
                  fontWeight="bold"
                  color={'blue'}
                  _hover={{ bg: ' #87CEEE', color: 'white', border:"none" }}
                >
                  Read More
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
         
      </Box>
      <nav style={{width:"100%",background:"#4169E1", height:"3rem", display: 'flex', justifyContent: 'center'}}>
      {visibleCards < totalCards && (
        <Button
          mt={4}
          height="2rem"
          width="7rem"
          borderRadius="25px"
          variant="outline"
          colorScheme="blue"
          onClick={showMoreCards}
          alignSelf="center"
          border="none"
          backgroundColor="blue"
          color="white"
          fontWeight="bold"
          cursor="pointer"
        >
          Show More
        </Button>
      )}
      </nav>
   </>
  )
}

export default London