import React, { useEffect,useState } from 'react'
// import { useState  } from 'react'
import { Stack,Box,Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

 export const Feed = () => {

  const [selectedCategory,setSelectedCategory]=useState("New")
  const [videos,setVideos]=useState([])

  useEffect(()=>{
     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
   },[selectedCategory])   //@@@@@@@   nhi smjh aaya   @@@@@@


  return (
    <Stack sx={{flexDirection:{xs:'column',md:'row'}}}>
      <Box sx={{height:{xs:"auto",md:"92vh"},width:{xs:"auto"},borderRight:"1px solid #3d3d3d",px:{xs:0,md:2}}}>
<SideBar 
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}   
       />
<Typography className='copyright'
variant='body2' sx={{mt:1.5,color:'#fff'}}>
Copyright 2023 JSM Media
</Typography>
      </Box>

      <Box p={2} sx={{overflowY:"auto" , height:'90vh', flex:2}}>
       
       <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
        {selectedCategory} <span style={{color:"#F31503"}}>
           Videos
        </span>
       </Typography>

       <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed