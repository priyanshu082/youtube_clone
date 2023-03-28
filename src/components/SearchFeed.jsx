import React, { useEffect, useState } from 'react'
import {  Box, Typography } from '@mui/material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

export const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm}=useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm])   //@@@@@@@   nhi smjh aaya   @@@@@@


  return (
    <Box p={2} sx={{ overflowY: "auto", height: '90vh', flex: 2,ml:"120px" }}>

    <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
      Search Results for: <span style={{color:"#F31503"}}>{searchTerm} </span>Videos
    </Typography>

    <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed