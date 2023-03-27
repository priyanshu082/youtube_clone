import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia  } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoVideoUrl,demoChannelTitle,demoVideoTitle,demoChannelUrl} from '../utils/constants'

export const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{md:'320px', xs:"100%"},boxShadow:"none" ,borderRadius:1}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:443, height:180}}/>
        </Link>
        <CardContent sx={{background:"#1e1e1e",height:'66px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
             <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60) }
             </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
             <Typography variant='subtitle2' fontWeight="bold" color="grey">
                {snippet?.channelTitle || demoChannelTitle }
                <CheckCircle sx={{fontSize:12,color:"red",ml:'5px', mt:"2px"}}/>
             </Typography>
            </Link>
        </CardContent>

        
    </Card>
  )
}

export default VideoCard